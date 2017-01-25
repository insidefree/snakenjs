import Point from "./Point"
import { Direction } from './Direction';
import Figure from './Figure';

export interface ISnake {
    // tail: Point
    // length: number
    direction: Direction
}

export default class Snake extends Figure implements ISnake {
    // tail: Point
    // length: number
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

}