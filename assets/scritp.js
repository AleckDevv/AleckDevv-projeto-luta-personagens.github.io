import { Character } from "../assets/Character.js";
import { Knight } from "../assets/Knight.js";
import { Socerer } from "../assets/Socerer.js";
import { LittleMonster } from "./LittleMonster.js";
import { BigMonster } from "./BigMonster.js";

import { Stage } from "./Stage.js";
import { Log } from "./Log.js";

let char = new Knight('Alex');
let monster =  new Socerer('Feiticeiro');
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);
stage.start();