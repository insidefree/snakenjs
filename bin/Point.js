"use strict";
var Direction_1 = require("./Direction");
var term = require("terminal-kit").terminal;
var Point = (function () {
    function Point(data) {
        var _this = this;
        this.Draw = function () {
            term.moveTo.red(_this.x, _this.y, _this.symb);
        };
        this.Clear = function () {
            _this.symb = "";
            _this.Draw();
        };
        this.x = data.x;
        this.y = data.y;
        this.symb = data.symb;
    }
    Point.prototype.Move = function (offset, direction) {
        if (direction == Direction_1.Direction.RIGHT) {
            this.x = this.x + offset;
        }
        else if (direction == Direction_1.Direction.LEFT) {
            this.x = this.x - offset;
        }
        else if (direction == Direction_1.Direction.UP) {
            this.y = this.y + offset;
        }
        else if (direction == Direction_1.Direction.DOWN) {
            this.y = this.y - offset;
        }
    };
    return Point;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Point;
//# sourceMappingURL=Point.js.map