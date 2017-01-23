"use strict";
var Figure = (function () {
    function Figure() {
        this.pLine = [];
    }
    Figure.prototype.Draw = function () {
        for (var _i = 0, _a = this.pLine; _i < _a.length; _i++) {
            var p = _a[_i];
            p.Draw();
        }
    };
    return Figure;
}());
exports.__esModule = true;
exports["default"] = Figure;
