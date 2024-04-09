import { configlevel0 } from "./levelData/level0/configlevel0";
import { configlevel1 } from "./levelData/level1/configlevel1";
import { configlevel2 } from "./levelData/level2/configlevel2";
import { configlevel3 } from "./levelData/level3/configlevel3";
import { configlevel4 } from "./levelData/level4/configlevel4";
import { configlevel5 } from "./levelData/level5/configlevel5";
import { configlevel6 } from "./levelData/level6/configlevel6";
import { configlevel7 } from "./levelData/level7/configlevel7";
import { configlevel8 } from "./levelData/level8/configlevel8";
import { configlevel9 } from "./levelData/level9/configlevel9";
import { configlevel10 } from "./levelData/level10/configlevel10";
import { configlevel11 } from "./levelData/level11/configlevel11";
import { configlevel12 } from "./levelData/level12/configlevel12";
import { configlevel13 } from "./levelData/level13/configlevel13";
import { configtest } from "./levelData/test/configlevel_test";
import { configlevel6_add1 } from "./levelData/level6/configlevel6_add1";
import { configlevel7_add1 } from "./levelData/level7/configlevel7_add1";
import { configlevel4_add1 } from "./levelData/level4/configlevel4_add1";

//additional config
    
export const levelConfigCollection = {
    0: configlevel0,
    1: configlevel1,
    2: configlevel2,
    3: configlevel3,
    4: configlevel4.concat(configlevel4_add1),
    5: configlevel5,
    6: configlevel6.concat(configlevel6_add1),
    7: configlevel7.concat(configlevel7_add1),
    8: configlevel8,
    9: configlevel9,
    10: configlevel10,
    11: configlevel11,
    12: configlevel12,
    13: configlevel13,
    // 14: undefined,
    // 15: undefined,
    // 16: undefined,
    // 17: undefined,
    // 18: undefined,
    // 19: undefined,
    'test': configtest
}