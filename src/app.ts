const term = require("terminal-kit").terminal
import Point from "./Point"
import HorizontalLine from "./HorizontalLine"
import VerticalLine from './VerticalLine'
import Snake from './Snake'
import { Direction } from './Direction';


let pReset = new Point({ x: 0, y: 11, symb: "" })
let hlTop = new HorizontalLine(1, 20, 1, "@")
let hlBot = new HorizontalLine(1, 20, 10, "@")
let vlLeft = new VerticalLine(1, 10, 1, "@")
let vlRight = new VerticalLine(1, 10, 20, "@")

let pSnake = new Point({ x: 4, y: 5, symb: "*" })
let snake = new Snake(pSnake, 4, Direction.RIGHT)

term.clear()
hlTop.Draw()
hlBot.Draw()
vlLeft.Draw()
vlRight.Draw()
snake.Draw()
setTimeout(() => {
    snake.Move()
}, 300)
setTimeout(() => {
    snake.Move()
}, 300)
setTimeout(() => {
    snake.Move()
}, 300)
setTimeout(() => {
    snake.Move()
}, 300)
setTimeout(() => {
    snake.Move()
}, 300)

pReset.Draw()
