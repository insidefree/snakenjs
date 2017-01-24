import Point from "./Point"
import { Direction } from './Direction';
import Figure from './Figure';

export default class Snake extends Figure {
    constructor(private tail: Point, private length: number, private direction: Direction) {
        super()
        for (let i = 0; i < length; i++) {
            let p = new Point(tail)
            p.Move(i, direction)
            this.pLine.push(p)
        }
    }

}