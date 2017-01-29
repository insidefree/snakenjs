"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point_1 = require("./Point");
var Direction_1 = require("./Direction");
var Figure_1 = require("./Figure");
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(tail, length, direction) {
        var _this = _super.call(this) || this;
        _this.Move = function () {
            var tail = _this.pLine[0];
            _this.pLine.shift();
            var head = _this.GetNextPoint();
            _this.pLine.push(head);
            tail.Clear();
            head.Draw();
        };
        _this.GetNextPoint = function () {
            var head = _this.pLine[_this.pLine.length - 1];
            var nextPoint = new Point_1.default(head);
            nextPoint.Move(1, _this.direction);
            return nextPoint;
        };
        _this.HandleKey = function (name, term) {
            if (name === 'CTRL_C') {
                var pReset = new Point_1.default({ x: 0, y: 11, symb: "" });
                pReset.Draw();
                term.grabInput(false);
                setTimeout(function () { process.exit(); }, 100);
            }
            else if (name === "UP") {
                _this.direction = Direction_1.Direction.UP;
            }
            else if (name === "DOWN") {
                _this.direction = Direction_1.Direction.DOWN;
            }
            else if (name === "RIGHT") {
                _this.direction = Direction_1.Direction.RIGHT;
            }
            else if (name === "LEFT") {
                _this.direction = Direction_1.Direction.LEFT;
            }
        };
        _this.direction = direction;
        for (var i = 0; i < length; i++) {
            var p = new Point_1.default(tail);
            p.Move(i, direction);
            _this.pLine.push(p);
        }
        return _this;
    }
    return Snake;
}(Figure_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Snake;
//# sourceMappingURL=Snake.js.map