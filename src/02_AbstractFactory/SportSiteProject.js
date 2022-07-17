"use strict";
exports.__esModule = true;
var ManualTester_1 = require("./website/ManualTester");
var PhpDeveloper_1 = require("./website/PhpDeveloper");
var WebsitePM_1 = require("./website/WebsitePM");
var WebsiteTeamFactory_1 = require("./website/WebsiteTeamFactory");
var SportSiteProject = /** @class */ (function () {
    function SportSiteProject() {
        var projectTeamFactory = new WebsiteTeamFactory_1.WebsiteTeamFactory();
        var developer = new PhpDeveloper_1.PhpDeveloper();
        var tester = new ManualTester_1.ManualTester();
        var projectManager = new WebsitePM_1.WebsitePM();
        console.log('Creating a sport site project...');
        developer.writeCode();
        tester.testCode();
        projectManager.managerProject();
    }
    return SportSiteProject;
}());
new SportSiteProject();
