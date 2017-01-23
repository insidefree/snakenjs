import { IPoint } from "./Point"

interface IFigure {
    pLine: IPoint[]
}

export default class Figure implements IFigure {
    public pLine = []

    public Draw(): void {
        for (let p of this.pLine) {
            p.Draw()
        }
    }
}