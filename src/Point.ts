import { Direction } from './Direction';
let term = require("terminal-kit").terminal
export interface IPoint {
    Draw: () => void
}

type Data = Point | { x: number, y: number, symb: string }

export default class Point implements IPoint {
    public x: number
    public y: number
    public symb: string

    public constructor(data: Data) {
        this.x = data.x
        this.y = data.y
        this.symb = data.symb
    }

    public Move(offset: number, direction: Direction) {
        if (direction == Direction.RIGHT) {
            this.x = this.x + offset
        } else if (direction == Direction.LEFT) {
            this.x = this.x - offset
        } else if (direction == Direction.UP) {
            this.y = this.y + offset
        } else if (direction == Direction.DOWN) {
            this.y = this.y - offset
        }
    }

    public Draw = () => {
        term.moveTo.red(this.x, this.y, this.symb)
    }

    public Clear = () => {
        this.symb = ""
        this.Draw()
    }
}