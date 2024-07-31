/* 
Parte para mostrar os logs na área de log
como o log é uma lista, cria um array para serem adcionados com novos li 
nesse lista
*/

export class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    };

    addMessage(msg) {
        this.list.push(msg)
        this.render();
    };

    render() {
        this.listEl.innerHTML = '';
        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        };
    };
};