const term = require('terminal-kit').terminal
interface ISnake {

}

export class Snake {
    
    constructor(public x: number, public y: number, public symb: string) {
        this.x = x
        this.y = y
        this.symb = symb
    }
    public Draw(){
        term.moveTo.red(this.x, this.y, this.symb)
    }
}