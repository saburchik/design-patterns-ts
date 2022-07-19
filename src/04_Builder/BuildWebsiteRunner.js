"use strict";
exports.__esModule = true;
var Director_1 = require("./base/Director");
var VisitCardWebsite_1 = require("./sites/VisitCardWebsite");
var BuildWebsiteRunner = /** @class */ (function () {
    function BuildWebsiteRunner() {
        var director = new Director_1.Director();
        director.setBuilder(new VisitCardWebsite_1.VisitCardWebsite());
        var website = director.buildWebsite();
        console.log(website);
    }
    return BuildWebsiteRunner;
}());
new BuildWebsiteRunner();
