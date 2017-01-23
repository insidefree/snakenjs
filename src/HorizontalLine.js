"use strict";
var Point_1 = require("./Point");
var HorizontalLine = (function () {
    function HorizontalLine(xLeft, xRight, y, symb) {
        this.xLeft = xLeft;
        this.xRight = xRight;
        this.y = y;
        this.symb = symb;
        this.pLine = [];
        for (var x = this.xLeft; x <= this.xRight; x++) {
            var p = new Point_1["default"](x, this.y, this.symb);
            this.pLine.push(p);
        }
    }
    HorizontalLine.prototype.Draw = function () {
        for (var _i = 0, _a = this.pLine; _i < _a.length; _i++) {
            var p = _a[_i];
            p.Draw();
        }
    };
    return HorizontalLine;
}());
exports.__esModule = true;
exports["default"] = HorizontalLine;
