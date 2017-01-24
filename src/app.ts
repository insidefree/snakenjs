import Point from "./Point"
import HorizontalLine from "./HorizontalLine"
import VerticalLine from './VerticalLine';

// var child_process = require('child_process')
// child_process.execSync("start cmd.exe /K node app.js ")


let p02 = new Point(3, 3, "#")
let pReset = new Point(0, 11, "")
let hlTop = new HorizontalLine(0, 20, 0, "+")
let hlBot = new HorizontalLine(0, 20, 10, "+")
let vlTop = new VerticalLine(0,9,1,"+")
let vlBot = new VerticalLine(0,9,20,"+")
hlTop.Draw()
hlBot.Draw()
vlTop.Draw()
vlBot.Draw()
p02.Draw()
pReset.Draw()
