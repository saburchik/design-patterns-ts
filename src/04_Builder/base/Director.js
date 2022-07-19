"use strict";
exports.__esModule = true;
exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildWebsite = function () {
        this.builder.createWebsite();
        this.builder.buildName();
        this.builder.buildCMS();
        this.builder.buildPrice();
        var website = this.builder.getWebsite();
        return website;
    };
    return Director;
}());
exports.Director = Director;
