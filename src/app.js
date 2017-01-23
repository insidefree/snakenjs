"use strict";
var term = require('terminal-kit').terminal;
var snake_1 = require("./snake");
var s1 = new snake_1.Snake(5, 5, "*");
var s2 = new snake_1.Snake(10, 10, '#');
//term.moveTo.red(1,1, "*")
term.clear();
s1.Draw();
s2.Draw();
