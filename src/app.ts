let term = require("terminal-kit").terminal
import Point from "./Point"
import HorizontalLine from "./HorizontalLine"
import VerticalLine from './VerticalLine';

let p02 = new Point(3, 3, "#")
let pReset = new Point(0, 11, "")
let hlTop = new HorizontalLine(1, 20, 1, "@")
let hlBot = new HorizontalLine(1, 20, 10, "@")
let vlLeft = new VerticalLine(1, 10, 1, "@")
let vlRight = new VerticalLine(1, 10, 20, "@")
term.clear()
hlTop.Draw()
hlBot.Draw()
vlLeft.Draw()
vlRight.Draw()
p02.Draw()
pReset.Draw()