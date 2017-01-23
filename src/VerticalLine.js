"use strict";
var Point_1 = require("./Point");
var VerticalLine = (function () {
    function VerticalLine(yTop, yBot, x, symb) {
        this.yTop = yTop;
        this.yBot = yBot;
        this.x = x;
        this.symb = symb;
        this.pVLine = [];
        for (var y = this.yTop; y <= this.yBot; y++) {
            var p = new Point_1["default"](this.x, y, this.symb);
            this.pVLine.push(p);
        }
    }
    VerticalLine.prototype.Draw = function () {
        for (var _i = 0, _a = this.pVLine; _i < _a.length; _i++) {
            var p = _a[_i];
            p.Draw();
        }
    };
    return VerticalLine;
}());
exports.__esModule = true;
exports["default"] = VerticalLine;
