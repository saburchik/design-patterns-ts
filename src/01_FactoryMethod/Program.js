"use strict";
exports.__esModule = true;
var CppDeveloperFactory_1 = require("./developers/C++/CppDeveloperFactory");
var JavaDeveloperFactory_1 = require("./developers/Java/JavaDeveloperFactory");
var PhpDeveloperFactory_1 = require("./developers/Php/PhpDeveloperFactory");
var Program = /** @class */ (function () {
    function Program() {
        var developerFactory = this.createDeveloperBySpecialty('php');
        var developer = developerFactory.createDeveloper();
        developer.writeCode();
    }
    Program.prototype.createDeveloperBySpecialty = function (specialty) {
        if (specialty === 'java') {
            return new JavaDeveloperFactory_1.JavaDeveloperFactory();
        }
        else if (specialty === 'c++') {
            return new CppDeveloperFactory_1.CppDeveloperFactory();
        }
        else if (specialty === 'php') {
            return new PhpDeveloperFactory_1.PhpDeveloperFactory();
        }
        else {
            throw Error(specialty + ' is unknown specialty.');
        }
    };
    return Program;
}());
new Program();
