import Point from "./Point"
import Figure from "./Figure"

export default class HorizontalLine extends Figure {

    constructor(private xLeft: number, private xRight: number, private y: number, private symb: string) {
        super()
        for (let x = this.xLeft; x <= this.xRight; x++) {
            let p = new Point(x, this.y, this.symb)
            this.pLine.push(p)
        }
    }
}