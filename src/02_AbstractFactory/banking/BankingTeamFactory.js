"use strict";
exports.__esModule = true;
exports.BankingTeamFactory = void 0;
var BankingPM_1 = require("./BankingPM");
var JavaDeveloper_1 = require("./JavaDeveloper");
var QATester_1 = require("./QATester");
var BankingTeamFactory = /** @class */ (function () {
    function BankingTeamFactory() {
    }
    BankingTeamFactory.prototype.getDeveloper = function () {
        return new JavaDeveloper_1.JavaDeveloper();
    };
    BankingTeamFactory.prototype.getTester = function () {
        return new QATester_1.QATester();
    };
    BankingTeamFactory.prototype.getProjectManager = function () {
        return new BankingPM_1.BankingPM();
    };
    return BankingTeamFactory;
}());
exports.BankingTeamFactory = BankingTeamFactory;
