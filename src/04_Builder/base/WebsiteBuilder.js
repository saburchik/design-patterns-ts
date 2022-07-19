"use strict";
exports.__esModule = true;
exports.WebsiteBuilder = void 0;
var Website_1 = require("./Website");
var WebsiteBuilder = /** @class */ (function () {
    function WebsiteBuilder() {
    }
    WebsiteBuilder.prototype.createWebsite = function () {
        this.website = new Website_1.Website();
    };
    WebsiteBuilder.prototype.getWebsite = function () {
        return this.website;
    };
    return WebsiteBuilder;
}());
exports.WebsiteBuilder = WebsiteBuilder;
