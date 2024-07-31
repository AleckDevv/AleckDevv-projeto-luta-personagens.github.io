/* 
Essa classe vai ser a reponsável por identifacar os personagens,
saber quem tá atancando, exibir os dados de ataque na tela
*/

export class Stage {
    /* no contrutor  vou identificar quem são os dois lutadores
    e quais os elementos deles
    
    e o log para ser renderizado em tela.
    */
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    };


    start() {
        this.update();

        // ação para o evento de atacar do botão
        this.fighter1El.querySelector('.attackbutton').addEventListener('click', () => { this.doAttack(this.fighter1, this.fighter2) });
        this.fighter2El.querySelector('.attackbutton').addEventListener('click', () => { this.doAttack(this.fighter2, this.fighter1) });
    };

    update() {
        // atualiza as informações dofighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;

        // mudar a barra de vida baseada na porcentagem de vida atual e vida máxima
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        //atualiza as informações do fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`

    };

    doAttack(attacking, attacked) {
        // console.log(`${attacking.name} está atacando ${attacked.name}`);

        // criar verificação para saber se tá vivo ou morto
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('atacando player sem vida');
            return;
        }


        /* 
        Criando um fator alatório de ataque, onde um pode atacar e o outro defender.
        Isso de forma aleatória baseado na força do personagem.
        */
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        /* Parte para causar o dano / personagem conseguir defender */
        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} consegiu defender...`)
        };

        this.update(); // atualiza informações de ataque
    };

};
