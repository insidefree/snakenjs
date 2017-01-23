"use strict";
var term = require("terminal-kit").terminal;
var Snake = (function () {
    function Snake(x, y, symb) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.symb = symb;
        this.Draw = function () {
            term.moveTo.red(_this.x, _this.y, _this.symb);
        };
        this.x = x;
        this.y = y;
        this.symb = symb;
    }
    return Snake;
}());
exports.Snake = Snake;
