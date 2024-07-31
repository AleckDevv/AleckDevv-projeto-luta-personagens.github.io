// classe para feiticeiro
import { Character } from "./Character.js";
export class Socerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 14;
        this.defense = 3;
        this.maxLife = this.life
    };
};