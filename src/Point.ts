let term = require("terminal-kit").terminal
export interface IPoint {
    x: number
    y: number
    symb: string
    Draw: () => void
}

export default class Point implements IPoint {
    constructor(public x: number, public y: number, public symb: string) {
        this.x = x
        this.y = y
        this.symb = symb
    }

    getX() {
        return this.x
    }
    public Draw = () => {
        term.moveTo.red(this.x, this.y, this.symb)
    }
}