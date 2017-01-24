import Point from "./Point"

interface IFigure {
}

export default class Figure implements IFigure {
    protected pLine: Point[] = []

    public Draw(): void {
        for (let p of this.pLine) {
            p.Draw()
        }
    }

}