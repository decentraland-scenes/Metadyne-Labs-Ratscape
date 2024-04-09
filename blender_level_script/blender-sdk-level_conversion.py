import bpy
import os
import mathutils
import math
import json

_LEVEL_COLLECTION_NAME = "level5" #MATCHCASE
_OUTPUT_PATH = "//OUT_PORTAL_LEVEL"


failed_counter = 0

export_path = bpy.path.abspath(_OUTPUT_PATH)
os.makedirs(export_path, exist_ok=True)
level_config_file = open(os.path.join(export_path, "config" + _LEVEL_COLLECTION_NAME + ".ts"), "w")

config_data = []
config_string = ''


_ASSET_TYPE_DICT = {
    "boxdefault": "BoxType.BOX_DEFAULT",
    "boxmirror": "BoxType.BOX_MIRROR",
    "floorportable": "WallType.FLOOR_PORTABLE",
    "floorunportable": "WallType.FLOOR_UNPORTABLE",
    "floorunvariation1": "WallType.FLOOR_UNPORTABLE_V1",
    "floorunvariation2": "WallType.FLOOR_UNPORTABLE_V2",
    
    "wallportable": "WallType.WALL_PORTABLE",
    "wallunportable": "WallType.WALL_UNPORTABLE",
    "wallglass": "WallType.WALL_GLASS",
    "wallglasshole": "WallType.WALL_GLASSHOLE",
    "wallflip": "WallType.FLIPWALL",
    
    
    "buttonfloor": "ButtonType.BUTTON_FLOOR",
    "buttonpedestal": "ButtonType.BUTTON_PEDESTAL",
    "laseremitter": "LaserType.LASER_EMITTER",
    "laseremitter": "LaserType.LASER_EMITTER",
    "laseremitterred": "LaserType.LASER_EMITTER_RED",
    "laserreceiver": "LaserType.LASER_RECEIVER",
    
    "platformhalfmodule": "PlatformType.PLATFORM_HALF",
    "platformmovingrail": "PlatformType.PLATFORM_RAIL",
    "elevatorbase": "PlatformType.PLATFORM_ELEVATOR_BASE",
    
    "platformlightemitter": "PlatformType.PLATFORM_LIGHT_EMITTER",
    "platformmovinghorizontal": "PlatformType.PLATFORM_MOVING_H",
    "elevator": "PlatformType.PLATFORM_MOVING_V",
    
    "door": "DoorType.DOOR_DEFAULT",
    "doorentrancesign": "LevelSignType.SIGN_DOOR_ENTRANCE",
    "doorexitsign": "LevelSignType.SIGN_DOOR_EXIT",
    
    "stairs": "StairType.STAIR_DEFAULT",
    
    "voice": "VoiceOverType.VOICEOVER_DEFAULT",
    
    "labstartmodels": "LabType.LAB_START",
    "labfinishmodels": "LabType.LAB_FINISH",
    
    "controlroom": "MiscObjectType.CONTROL_ROOM",
    
    "securitycamera": "MiscObjectType.SECURITY_CAM",
    
    "signlevel": "LevelSignType.SIGN_VERTICALBIG",
    "laserfieldemitter": "LaserFieldType.LASER_FIELD_EMITTER",
    "laserfieldray": "LaserFieldType.LASER_FIELD_RAY",
    "acid": "AcidObjectType.ACID_DEFAULT",
    
    "turret": "TurretObjectType.TURRET_DEFAULT",
    
    "cat": "CatObjectType.CAT_DEFAULT",
    
    #VALUE WILL UPDATED BASED ON OBJECTS NAME
    "teleporter": ""
}
_ASSET_DIMENSION_DICT = {
    "boxdefault": "Vector3.create(1, 1, 1)",
    "boxmirror": "Vector3.create(1, 1, 1)",
    "floorportable": "Vector3.create(4, 0.04, 4)",
    "floorunportable": "Vector3.create(4, 0.04, 4)",
    "floorunvariation1": "Vector3.create(4, 0.04, 4)",
    "floorunvariation2": "Vector3.create(4, 0.04, 4)",
    
    "wallportable": "Vector3.create(4, 4, 0.04)",
    "wallunportable": "Vector3.create(4, 4, 0.04)",
    "wallglass": "Vector3.create(4, 4, 0.04)",
    "wallglasshole": "Vector3.create(4, 4, 0.04)",
    "wallflip": "Vector3.create(4, 4, 0.04)",
    
    "buttonfloor": "Vector3.create(3, 0.2, 3)",
    "buttonpedestal": "Vector3.create(0.5, 1.4, 0.5)",
    "laseremitter": "Vector3.create(2, 2, 0.2)",
    "laseremitterred": "Vector3.create(2, 2, 0.2)",
    "laserreceiver": "Vector3.create(2, 2, 0.2)",
    
    "platformhalfmodule": "Vector3.create(4, 2, 4)",
    "platformmovingrail": "Vector3.create(4, 1, 0.2)",
    "elevatorbase": "Vector3.create(4, 0.4, 4)",
    
    "platformlightemitter": "Vector3.create(2, 0.04, 2)",
    "platformmovinghorizontal": "Vector3.create(4, 0.4, 4)",
    "elevator": "Vector3.create(4, 0.4, 4)",
    
    "door": "Vector3.create(4, 4, 4)",
    "doorentrancesign": "Vector3.create(0.1, 0.1, 0.1)",
    "doorexitsign": "Vector3.create(0.1, 0.1, 0.1)",
    
    "stairs": "Vector3.create(4, 4, 4)",
    
    "labstartmodels": "Vector3.create(20, 12, 22)",
    "labfinishmodels": "Vector3.create(12, 12, 22)",
    
    "controlroom": "Vector3.create(8, 4, 4)",
    
    "securitycamera": "Vector3.create(1, 1, 1)",
    
    "signlevel": "Vector3.create(3, 6, 0.1)",
    "laserfieldemitter": "Vector3.create(0.75, 3.75, 0.4)",
    "laserfieldray": "Vector3.create(3.4, 3.31505, 0.1)",
    "acid": "Vector3.create(4, 2, 4)",
    
    "turret": "Vector3.create(4.2, 3, 2.4)",
    
    "cat": "Vector3.create(0.8, 1, 1.6)",
    
    "teleporter": "Vector3.create(3, 5, 3.5)"
}

_CONTROLLED_OBJECTS = [
    "platformlight",
    "platformmovinghorizontal",
    "platformmovingvertical",
    "door",
    "stairs",
    "laserfieldray"
]



def construct_basic_ob_data(ob, child_matrix_world = None):
    global failed_counter
    global config_string
    
    if(not ob.instance_collection):
        print("WARNING! Can't find instance collection of child: ", ob.name)
        failed_counter += 1
        return False
    
    object_name = ob.name.lower()
    #object_matrix = ob.matrix_world.copy()
    object_instance_collection_name = ob.instance_collection.name.lower()
    
    if(object_instance_collection_name in _ASSET_TYPE_DICT.keys()):
        pass
    else:
        print("WARNING! instance not in dictionary: ", object_instance_collection_name)
        failed_counter += 1
        return False
    
    matrix_world = child_matrix_world
    if(not child_matrix_world):
        #print("use object matrix")
        matrix_world = ob.matrix_world.copy()
    else:
        #print("use calculated matrix")
        pass
    
    blender_pos = matrix_world.to_translation()
    sdk_pos = mathutils.Vector((-blender_pos.x, blender_pos.z, -blender_pos.y))
    blender_rot = matrix_world.to_quaternion()
    sdk_rot = mathutils.Quaternion((blender_rot.w, blender_rot.x, -blender_rot.z, blender_rot.y))
    sdk_rot_euler = sdk_rot.to_euler()
    
    position = "Vector3.create(" + str(round(sdk_pos.x, 4)) + "," + str(round(sdk_pos.y, 4)) + "," + str(round(sdk_pos.z, 4)) + ")"
    rotation = "Quaternion.fromEulerDegrees(" + str(round(math.degrees(sdk_rot_euler.x), 4)) + "," + str(round(math.degrees(sdk_rot_euler.y), 4)) + "," + str(round(math.degrees(sdk_rot_euler.z), 4)) + ")"

    ob_data = {}
    
    if(object_instance_collection_name == "voice"):
        dimension = "Vector3.create(" + str(ob.scale.x * 2) + "," + str(ob.scale.z * 2) + "," + str(ob.scale.y * 2) + ")"
    elif(object_instance_collection_name == "laserfieldray"):
        dimension = "Vector3.create(" + str(ob.scale.x * 3.4) + "," + str(ob.scale.z * 3.31505) + "," + "0.1" + ")"
    elif(object_instance_collection_name == "acid"):
        dimension = "Vector3.create(" + str(ob.scale.x * 4) + "," + str(ob.scale.z * 2) + "," + str(ob.scale.y * 4) + ")"    
    else:
        dimension = _ASSET_DIMENSION_DICT[object_instance_collection_name]
    
    if(object_instance_collection_name != "teleporter"):
        ob_data["type"] = _ASSET_TYPE_DICT[object_instance_collection_name]
    elif (ob.name.split('.')[0] == "teleporter_start"):
        ob_data["type"] = "TeleporterType.TELEPORTER_START"
    elif (ob.name.split('.')[0] == "teleporter_finish"):
        ob_data["type"] = "TeleporterType.TELEPORTER_FINISH"
    else:
        print("WARNING! can't find object type: ", object_instance_collection_name)
        
    
    ob_data["position"] = position
    ob_data["rotation"] = rotation
    ob_data["dimension"] = dimension
    
    
    #cf_string = json.dumps(ob_data, indent = 4)
    #cf_string = cf_string.replace('"', '')
    if(object_instance_collection_name == "cat"):
        ob_data["dieVOSource"] = "UPDATE_SOUND_PATH"
        ob_data["saveVOSource"] = "UPDATE_SOUND_PATH"
        
    if(object_instance_collection_name == "flipwall"):
        ob_data["initial_state"] = "FlipWallState.UNPORTABLE UPDATE_STATE_OR_DELETE_ME"
        
    if(object_instance_collection_name == "laserfieldray"):
        ob_data["initial_state"] = "LaserFieldRayState.ON UPDATE_STATE_OR_DELETE_ME"
    
    if(object_instance_collection_name == "door"):
        ob_data["initial_state"] = "DoorState.CLOSE UPDATE_STATE_OR_DELETE_ME"
        
    if(object_instance_collection_name == "stairs"):
        ob_data["initial_state"] = "StairState.OFF UPDATE_STATE_OR_DELETE_ME"
        
    if(object_instance_collection_name == "teleporter"):
        ob_data["initial_state"] = "TeleporterState.OFF"
        
    if(object_instance_collection_name == "platformmovinghorizontal" or object_instance_collection_name == "elevator"):
        ob_data["path"] = "[ Vector3.create(UPDATE_ME), Vector3.create(UPDATE_ME), ]"
        
    if(object_instance_collection_name == "voice"):
        ob_data["audio_src"] = "'sounds/level/"+ ob.name + ".mp3'"
    #    cf_string = cf_string[:-1]
    #    audio_name = '    audio_src: "sounds/level/'+ ob.name + '.mp3"'
    #    cf_string = cf_string + audio_name + '\n}'
        
    #print("OB_DATA", ob_data)
    
    #config_string = config_string + '\n' + cf_string + ','
    
    return ob_data


def getCollectionObject(_collection):
    getTransformDataFromCollection(_collection)
    
    for childCollection in _collection.children:
        print("-----",childCollection)
        getCollectionObject(childCollection)
        
    return


def getTransformDataFromCollection(_collection):
    global failed_counter
    global level_config_file
    global config_string
    
    print("____________________________________________________________________\n")
    print("PROCESSING COLLECTION: ", _collection.name)
    print("____________________________________________________________________\n\n")
    
    for ob in _collection.objects:
        if(ob.instance_collection):
            if(ob.parent != None): 
                #print("object is children, continue. ", ob.name)
                continue
            
            #print("process object: ", ob.name, "parent: ", ob.parent)
            ob_data = construct_basic_ob_data(ob)
            
            if(ob.children):
                controlled = "activating"
                
                if(ob.instance_collection.name.lower() in _CONTROLLED_OBJECTS):
                    controlled = "activatedBy"
                
                ob_data[controlled] = []
                
                #print("proses object children: ")
                
                for ob_child in ob.children:
                    print("   * " + ob_child.name)
                    
                    ob_child_matrix_world = ob.matrix_world @ ob_child.matrix_parent_inverse @ ob_child.matrix_basis
                    
                    ob_data_children = construct_basic_ob_data(ob_child, ob_child_matrix_world)
                    
                    if(ob_data_children):
                        ob_data[controlled].append(ob_data_children)
                
            else:
                #print("object children: None")
                pass
                
            if(ob_data != False):
                config_data.append(ob_data)
            
        else:
            if(ob.parent != None): 
                #print("object is children, continue. ", ob.name)
                continue
            
            print("WARNING! Can't find instance collection: ", ob.name)
            failed_counter += 1
        
        #print("_____")

    
def main():
    global failed_counter
    global level_config_file
    global config_string
    
    depsgraph = bpy.context.evaluated_depsgraph_get()
    depsgraph.update()
    bpy.context.view_layer.update()

    for ob in bpy.context.selected_objects:
        ob.select_set(False)
    bpy.ops.object.select_all(action='DESELECT')
    bpy.context.view_layer.objects.active = None

    try:
        level_collection = bpy.data.collections[_LEVEL_COLLECTION_NAME]
            
    except KeyError as ex:
        print("ERROR:", ex.args)
        print("make sure `_LEVEL_COLLECTION_NAME` value is a Collection name")
        
    #getTransformDataFromCollection(level_collection)
    getCollectionObject(level_collection)

    #print("object final sdk data: ", ob_data)
    config_string = json.dumps(config_data, indent = 4)
    config_string = config_string.replace('"', '')
    
    declaration_string1 = 'import { Quaternion, Vector3 } from "@dcl/sdk/math"\n'
    declaration_string2 = 'import { BoxType, MiscObjectType, LabType, LevelSignType, ButtonType, DoorState, DoorType, IBoxData, IButtonData, IDoorData, ILaserData, IPlatformData, IStairData, ITeleporterData, IVoiceOverData, IWallData, LaserType, PlatformType, StairState, StairType, TeleporterState, TeleporterType, VoiceOverType, WallType, IMiscObjectData, ILabData, ILevelSign, LaserFieldType, ILaserFieldData, LaserFieldRayState, AcidObjectType, IAcidObjectData, TurretObjectType, ITurretObjectData, FlipWallState, IFlipWallData, CatObjectType, ICatObjectData } from "../../../gameObject/gameObjectType"'
    declaration_string3 = ": (IBoxData | IWallData | IFlipWallData | IPlatformData | IButtonData | IDoorData | IStairData | ILaserData | ITeleporterData | IVoiceOverData | IMiscObjectData | ILabData | ILevelSign | ILaserFieldData | IAcidObjectData | ITurretObjectData | ICatObjectData)[] = "
    
    config_string = declaration_string1 + declaration_string2 + "\n\nexport const config" + _LEVEL_COLLECTION_NAME + declaration_string3 + config_string
    
    
    level_config_file.write(config_string)
    level_config_file.close()
    level_config_file = None
            
            
    #print("final data: ", config_string)
    print("FAILED: ", failed_counter)


if __name__ == '__main__':
    main()
    