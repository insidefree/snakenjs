import Point from './Point';

interface IVerticalLine {
    pVLine: Point[]
}

export default class VerticalLine implements IVerticalLine {
    public pVLine = []

    constructor(private yTop: number, private yBot: number, private x: number, private symb: string) {
        for (let y = this.yTop; y <= this.yBot; y++) {
            let p = new Point(this.x, y, this.symb)
            this.pVLine.push(p)
        }
    }

    public Draw(): void {
        for (let p of this.pVLine) {
            p.Draw()
        }
    }
}