import Point, { IPoint } from "./Point"

interface IHorizontalLine {
    pLine: IPoint[]

}

export default class HorizontalLine implements IHorizontalLine {
    public pLine = []

    constructor(private xLeft: number, private xRight: number, private y: number, private symb: string) {
        for (let x = this.xLeft; x <= this.xRight; x++) {
            let p = new Point(x, this.y, this.symb)
            this.pLine.push(p)
        }
    }

    public Draw(): void {
        for (let p of this.pLine) {
            p.Draw()
        }
    }
}