"use strict";
var Point_1 = require("./Point");
var HorizontalLine_1 = require("./HorizontalLine");
var VerticalLine_1 = require("./VerticalLine");
// var child_process = require('child_process')
// child_process.execSync("start cmd.exe /K node app.js ")
var p02 = new Point_1["default"](3, 3, "#");
var pReset = new Point_1["default"](0, 11, "");
var hlTop = new HorizontalLine_1["default"](0, 20, 0, "+");
var hlBot = new HorizontalLine_1["default"](0, 20, 10, "+");
var vlTop = new VerticalLine_1["default"](0, 9, 1, "+");
var vlBot = new VerticalLine_1["default"](0, 9, 20, "+");
hlTop.Draw();
hlBot.Draw();
vlTop.Draw();
vlBot.Draw();
p02.Draw();
pReset.Draw();
