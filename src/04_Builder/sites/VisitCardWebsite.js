"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VisitCardWebsite = void 0;
var Cms_1 = require("../enum/Cms");
var WebsiteBuilder_1 = require("../base/WebsiteBuilder");
var VisitCardWebsite = /** @class */ (function (_super) {
    __extends(VisitCardWebsite, _super);
    function VisitCardWebsite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisitCardWebsite.prototype.buildName = function () {
        this.website.setName('Visit cards');
    };
    VisitCardWebsite.prototype.buildCMS = function () {
        this.website.setCMS(Cms_1.Cms.WORDPRESS);
    };
    VisitCardWebsite.prototype.buildPrice = function () {
        this.website.setPrice(1221);
    };
    return VisitCardWebsite;
}(WebsiteBuilder_1.WebsiteBuilder));
exports.VisitCardWebsite = VisitCardWebsite;
