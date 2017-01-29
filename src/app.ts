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
let snake = new Snake(pSnake, 5, Direction.RIGHT)

term.clear()
hlTop.Draw()
hlBot.Draw()
vlLeft.Draw()
vlRight.Draw()
snake.Draw()
pReset.Draw()

term.grabInput({ mouse: 'button' });

setInterval(() => { snake.Move() }, 500)

term.on('key', function (name, matches, data) {
    snake.HandleKey(name, term)
});

// let i = 0
// const counter = (i, resolve, reject) => {
//     console.log("pending");
//     setTimeout(() => resolve(i), 2000)
// }

// while (i < 10) {

//     // console.log("----");
//     // term.on('key', function (name, matches, data) {
//     //     pReset.Draw()
//     //     console.log("'key' event:", name);
//     //     if (name === 'CTRL_C') { terminate(); }
//     // });
//     // setTimeout(()=>{console.log("&&")}, 3000)
//     counter(i, (i) => {console.log(i); }, () => { })
//     i++
// }





