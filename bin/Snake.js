"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point_1 = require("./Point");
var Figure_1 = require("./Figure");
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(tail, length, direction) {
        var _this = _super.call(this) || this;
        _this.Move = function () {
            var tail = _this.pLine[0];
            _this.pLine.shift();
            var head = _this.GetNextPoint();
            tail.Clear();
            head.Draw();
        };
        _this.GetNextPoint = function () {
            var head = _this.pLine[_this.pLine.length - 1];
            //console.log("----------",head);
            var nextPoint = new Point_1.default(head);
            nextPoint.Move(1, _this.direction);
            //console.log("nextPoint", nextPoint);
            return nextPoint;
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