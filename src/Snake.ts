import Point from "./Point"
import { Direction } from './Direction';
import Figure from './Figure';

export interface ISnake {
    direction: Direction
}

export default class Snake extends Figure implements ISnake {
    direction: Direction

    constructor(tail, length, direction) {
        super()
        this.direction = direction
        for (let i = 0; i < length; i++) {
            let p = new Point(tail)
            p.Move(i, direction)
            this.pLine.push(p)
        }
    }

    public Move = () => {
        let tail: Point = this.pLine[0]
        this.pLine.shift()
        let head: Point = this.GetNextPoint()
        this.pLine.push(head)
        tail.Clear()
        head.Draw()
    }

    public GetNextPoint = () => {
        let head = this.pLine[this.pLine.length - 1]
        let nextPoint: Point = new Point(head)
        nextPoint.Move(1, this.direction)
        return nextPoint
    }

    public HandleKey = (name, term) => {
        if (name === 'CTRL_C') {
            let pReset = new Point({ x: 0, y: 11, symb: "" })
            pReset.Draw()
            term.grabInput(false);
            setTimeout(function () { process.exit() }, 100)
        } else if (name === "UP") {
            this.direction = Direction.UP
        } else if (name === "DOWN") {
            this.direction = Direction.DOWN
        } else if (name === "RIGHT") {
            this.direction = Direction.RIGHT
        } else if (name === "LEFT") {
            this.direction = Direction.LEFT
        }
    }

}