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
        _this.tail = tail;
        _this.length = length;
        _this.direction = direction;
        //this.pLine = []
        for (var i = 0; i < length; i++) {
            var p = new Point_1["default"](tail);
            p.Move(i, direction);
            _this.pLine.push(p);
        }
        return _this;
    }
    return Snake;
}(Figure_1["default"]));
exports.__esModule = true;
exports["default"] = Snake;
