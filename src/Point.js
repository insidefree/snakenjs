"use strict";
var term = require("terminal-kit").terminal;
var Point = (function () {
    function Point(x, y, symb) {
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
    Point.prototype.getX = function () {
        return this.x;
    };
    return Point;
}());
exports.__esModule = true;
exports["default"] = Point;
