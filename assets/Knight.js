// classe para cavaleiro
import { Character } from "./Character.js";
export class Knight extends Character {
    /* 
    colocando os atributos para personagem especificos
    pois cada personagem tem um atributo diferente
    */
    constructor(name) {
        super(name);
        /* 
        por isso que aqui é setado outros valores
        */
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life
    };
};
