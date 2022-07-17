"use strict";
exports.__esModule = true;
exports.WebsiteTeamFactory = void 0;
var PhpDeveloper_1 = require("./PhpDeveloper");
var ManualTester_1 = require("./ManualTester");
var WebsitePM_1 = require("./WebsitePM");
var WebsiteTeamFactory = /** @class */ (function () {
    function WebsiteTeamFactory() {
    }
    WebsiteTeamFactory.prototype.getDeveloper = function () {
        return new PhpDeveloper_1.PhpDeveloper();
    };
    WebsiteTeamFactory.prototype.getTester = function () {
        return new ManualTester_1.ManualTester();
    };
    WebsiteTeamFactory.prototype.getProjectManager = function () {
        return new WebsitePM_1.WebsitePM();
    };
    return WebsiteTeamFactory;
}());
exports.WebsiteTeamFactory = WebsiteTeamFactory;
