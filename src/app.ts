let term = require("terminal-kit").terminal
import Point from "./Point"
import HorizontalLine from "./HorizontalLine"
import VerticalLine from './VerticalLine';

let p01 = new Point(2, 1, "*")
let p02 = new Point(8, 10, "#")
let hl = new HorizontalLine(2, 6, 3, "@")
let vl = new VerticalLine(4,7,2,"+")
p01.Draw()
hl.Draw()
vl.Draw()
p02.Draw()