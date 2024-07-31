// classe padrão que vai servir para outros pesrsonagem
// classe personagem
export class Character {

    #life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    };

    get life() {
        return this.#life;
    };


    set life(newLife) {
        /* 
        verificação para quando o máximo de vida chagar em 0
        não deixar com número negativo
        ex: -0 de vida. Chegou em zero, não faz nada, aplica o zero
        */
        this.#life = newLife < 0 ? 0 : newLife;
    };
};

