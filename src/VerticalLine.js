"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point_1 = require("./Point");
var Figure_1 = require("./Figure");
var VerticalLine = (function (_super) {
    __extends(VerticalLine, _super);
    function VerticalLine(yTop, yBot, x, symb) {
        var _this = _super.call(this) || this;
        _this.yTop = yTop;
        _this.yBot = yBot;
        _this.x = x;
        _this.symb = symb;
        for (var y = _this.yTop; y <= _this.yBot; y++) {
            var p = new Point_1["default"]({ x: _this.x, y: y, symb: _this.symb });
            _this.pLine.push(p);
        }
        return _this;
    }
    return VerticalLine;
}(Figure_1["default"]));
exports.__esModule = true;
exports["default"] = VerticalLine;
