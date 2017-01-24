"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point_1 = require("./Point");
var Figure_1 = require("./Figure");
var HorizontalLine = (function (_super) {
    __extends(HorizontalLine, _super);
    function HorizontalLine(xLeft, xRight, y, symb) {
        var _this = _super.call(this) || this;
        _this.xLeft = xLeft;
        _this.xRight = xRight;
        _this.y = y;
        _this.symb = symb;
        for (var x = _this.xLeft; x <= _this.xRight; x++) {
            var p = new Point_1.default({ x: x, y: _this.y, symb: _this.symb });
            _this.pLine.push(p);
        }
        return _this;
    }
    return HorizontalLine;
}(Figure_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HorizontalLine;
//# sourceMappingURL=HorizontalLine.js.map