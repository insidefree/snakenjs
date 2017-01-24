import Point from './Point';
import Figure from "./Figure"

export default class VerticalLine extends Figure {

    constructor(private yTop: number, private yBot: number, private x: number, private symb: string) {
        super()
        for (let y = this.yTop; y <= this.yBot; y++) {
            let p = new Point(this.x, y, this.symb)
            this.pLine.push(p)
        }
    }

}