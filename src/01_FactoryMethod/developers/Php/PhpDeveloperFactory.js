"use strict";
exports.__esModule = true;
exports.PhpDeveloperFactory = void 0;
var PhpDeveloper_1 = require("./PhpDeveloper");
var PhpDeveloperFactory = /** @class */ (function () {
    function PhpDeveloperFactory() {
    }
    PhpDeveloperFactory.prototype.createDeveloper = function () {
        return new PhpDeveloper_1.PhpDeveloper();
    };
    return PhpDeveloperFactory;
}());
exports.PhpDeveloperFactory = PhpDeveloperFactory;
