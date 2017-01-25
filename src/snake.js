"use strict";
var term = require('terminal-kit').terminal;
var Snake = (function () {
    function Snake(x, y, symb) {
        this.x = x;
        this.y = y;
        this.symb = symb;
        this.x = x;
        this.y = y;
        this.symb = symb;
    }
    Snake.prototype.Draw = function () {
        term.moveTo.red(this.x, this.y, this.symb);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map