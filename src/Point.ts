import { Direction } from './Direction';
let term = require("terminal-kit").terminal
export interface IPoint {
    Draw: () => void
}

export default class Point implements IPoint {
    private x: number
    private y: number
    private symb: string

    public constructor(x?, y?, symb?, p?) {
        p ? (
            this.x = p.x,
            this.y = p.y,
            this.symb = p.symb)
            : (
                this.x = x,
                this.y = y,
                this.symb = symb)
    }

    public Move(offset: number, direction: Direction) {
        if (direction == Direction.RIGHT) {
            this.x = this.x + offset
        } else if (direction == Direction.LEFT) {
            this.x = this.x - offset
        } else if (direction == Direction.UP) {
            this.x = this.y + offset
        } else if (direction == Direction.DOWN) {
            this.x = this.y - offset
        }
    }
    
    public Draw = () => {
        term.moveTo.red(this.x, this.y, this.symb)
    }
}