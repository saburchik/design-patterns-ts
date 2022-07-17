"use strict";
exports.__esModule = true;
exports.JavaDeveloperFactory = void 0;
var JavaDeveloper_1 = require("./JavaDeveloper");
var JavaDeveloperFactory = /** @class */ (function () {
    function JavaDeveloperFactory() {
    }
    JavaDeveloperFactory.prototype.createDeveloper = function () {
        return new JavaDeveloper_1.JavaDeveloper();
    };
    return JavaDeveloperFactory;
}());
exports.JavaDeveloperFactory = JavaDeveloperFactory;
