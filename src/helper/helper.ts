import { Entity, GltfContainer, Transform, engine } from "@dcl/sdk/ecs";
import { Quaternion, Vector3 } from "@dcl/sdk/math";
import resources from "../resources";


function compareQuat(q1: Quaternion, q2: Quaternion){
    return (
        q1.x === q2.x &&
        q1.y === q2.y &&
        q1.z === q2.z &&
        q1.w === q2.w
    )
}

function conjugateQuat(q: Quaternion){
    return Quaternion.create(-q.x, -q.y, -q.z, q.w)
}

function getEntityGlobalRotation(entity: Entity):Quaternion{
    let entityTransform = Transform.get(entity)
    if(!entityTransform.parent){
        return entityTransform.rotation
    }
    else{
        return Quaternion.multiply(getEntityGlobalRotation(entityTransform.parent), entityTransform.rotation)
    }
}

export function easeOutBack(x: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    }

function getYawRotation(q: Quaternion){
    let yaw = Math.atan2(2 * q.y * q.w - 2 * q.x * q.z, 1 - 2 * q.y * q.y - 2 * q.z * q.z)
    return yaw * 180.0 / (Math.PI)
}

// function getPitchRotation(q: Quaternion){
//     let pitch = Math.atan2(2 * q.x * q.w - 2 * q.y * q.z, 1 - 2 * q.x * q.x - 2 * q.z * q.z)
//     return pitch * 180.0 / (Math.PI)
// }

// function getRollRotation(q: Quaternion){
//     let roll = Math.atan2(2 * q.y * q.w - 2 * q.x* q.z, 1 - 2 * q.y * q.y - 2 * q.z * q.z)
//     return roll * 180.0 / (Math.PI)
// }

function rotateVectorRelativeToPoint(v: Vector3, originPoint: Vector3, q: Quaternion){
    let vRelativePos = Vector3.subtract(v, originPoint)
    vRelativePos = Vector3.rotate(vRelativePos, q)
    vRelativePos = Vector3.add(vRelativePos, originPoint)

    return vRelativePos
}

function createDebugArrow(position: Vector3, rotation: Quaternion){
    let debugArrow = engine.addEntity()
    Transform.create(debugArrow, {
        position: position, 
        rotation: rotation,
        scale: Vector3.create(2, 2, 1)
    })
    GltfContainer.create(debugArrow, resources.models.debugArrow)

    return debugArrow
}

function isNumberBetweenAB(A: number, B: number, num: number){
    let min = Math.min(A, B)
    let max = Math.max(A, B)
    return num > min && num < max
}

function isNumberABSameSide(A: number, B: number, pivot: number){
    return (A - pivot) * (B - pivot) > 0
}
 
function clampNumber(number: number, min: number, max: number){
    return Math.min(Math.max(number, min), max)
}

export default{
    compareQuat,
    conjugateQuat,
    rotateVectorRelativeToPoint,
    getEntityGlobalRotation,
    createDebugArrow,
    easeOutBack,
    isNumberBetweenAB,
    isNumberABSameSide,
    clampNumber,
//     getPitchRotation,
    getYawRotation,
//     getRollRotation
}

export function formatTimer(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(Math.floor(remainingSeconds)).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}