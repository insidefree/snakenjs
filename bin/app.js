"use strict";
var term = require("terminal-kit").terminal;
var Point_1 = require("./Point");
var HorizontalLine_1 = require("./HorizontalLine");
var VerticalLine_1 = require("./VerticalLine");
var Snake_1 = require("./Snake");
var Direction_1 = require("./Direction");
var pReset = new Point_1.default({ x: 0, y: 11, symb: "" });
var hlTop = new HorizontalLine_1.default(1, 20, 1, "@");
var hlBot = new HorizontalLine_1.default(1, 20, 10, "@");
var vlLeft = new VerticalLine_1.default(1, 10, 1, "@");
var vlRight = new VerticalLine_1.default(1, 10, 20, "@");
var pSnake = new Point_1.default({ x: 4, y: 5, symb: "*" });
var snake = new Snake_1.default(pSnake, 5, Direction_1.Direction.RIGHT);
term.clear();
hlTop.Draw();
hlBot.Draw();
vlLeft.Draw();
vlRight.Draw();
snake.Draw();
pReset.Draw();
// setTimeout(() => { snake.Move() }, 500)
// setTimeout(() => { snake.Move() }, 1000)
// setTimeout(() => { snake.Move() }, 1500)
// setTimeout(() => { snake.Move() }, 2000)
// setTimeout(() => pReset.Draw(), 5000)
// function terminate() {
//     term.grabInput(false);
//     setTimeout(function () { process.exit() }, 100);
// }
term.grabInput({ mouse: 'button' });
setInterval(function () { snake.Move(); }, 500);
term.on('key', function (name, matches, data) {
    snake.HandleKey(name, term);
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
//# sourceMappingURL=app.js.map