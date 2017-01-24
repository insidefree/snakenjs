"use strict";
var term = require("terminal-kit").terminal;
var Point_1 = require("./Point");
var HorizontalLine_1 = require("./HorizontalLine");
var VerticalLine_1 = require("./VerticalLine");
var Snake_1 = require("./Snake");
var Direction_1 = require("./Direction");
var pReset = new Point_1["default"]({ x: 0, y: 11, symb: "" });
var hlTop = new HorizontalLine_1["default"](1, 20, 1, "@");
var hlBot = new HorizontalLine_1["default"](1, 20, 10, "@");
var vlLeft = new VerticalLine_1["default"](1, 10, 1, "@");
var vlRight = new VerticalLine_1["default"](1, 10, 20, "@");
var pSnake = new Point_1["default"]({ x: 4, y: 5, symb: "*" });
var snake = new Snake_1["default"](pSnake, 4, Direction_1.Direction.RIGHT);
term.clear();
hlTop.Draw();
hlBot.Draw();
vlLeft.Draw();
vlRight.Draw();
snake.Draw();
setTimeout(function () {
    snake.Move();
}, 300);
setTimeout(function () {
    snake.Move();
}, 300);
setTimeout(function () {
    snake.Move();
}, 300);
setTimeout(function () {
    snake.Move();
}, 300);
setTimeout(function () {
    snake.Move();
}, 300);
pReset.Draw();
