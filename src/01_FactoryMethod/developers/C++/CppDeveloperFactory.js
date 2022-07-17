"use strict";
exports.__esModule = true;
exports.CppDeveloperFactory = void 0;
var CppDeveloper_1 = require("./CppDeveloper");
var CppDeveloperFactory = /** @class */ (function () {
    function CppDeveloperFactory() {
    }
    CppDeveloperFactory.prototype.createDeveloper = function () {
        return new CppDeveloper_1.CppDeveloper();
    };
    return CppDeveloperFactory;
}());
exports.CppDeveloperFactory = CppDeveloperFactory;
