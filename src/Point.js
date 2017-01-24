"use strict";
var Direction_1 = require("./Direction");
var term = require("terminal-kit").terminal;
var Point = (function () {
    function Point(x, y, symb, p) {
        var _this = this;
        this.Draw = function () {
            term.moveTo.red(_this.x, _this.y, _this.symb);
        };
        p ? (this.x = p.x,
            this.y = p.y,
            this.symb = p.symb)
            : (this.x = x,
                this.y = y,
                this.symb = symb);
    }
    Point.prototype.Move = function (offset, direction) {
        if (direction == Direction_1.Direction.RIGHT) {
            this.x = this.x + offset;
        }
        else if (direction == Direction_1.Direction.LEFT) {
            this.x = this.x - offset;
        }
        else if (direction == Direction_1.Direction.UP) {
            this.x = this.y + offset;
        }
        else if (direction == Direction_1.Direction.DOWN) {
            this.x = this.y - offset;
        }
    };
    return Point;
}());
exports.__esModule = true;
exports["default"] = Point;
