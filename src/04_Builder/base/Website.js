"use strict";
exports.__esModule = true;
exports.Website = void 0;
var Website = /** @class */ (function () {
    function Website() {
    }
    Website.prototype.setName = function (name) {
        this.name = name;
    };
    Website.prototype.setCMS = function (CMS) {
        this.CMS = CMS;
    };
    Website.prototype.setPrice = function (price) {
        this.price = price;
    };
    Website.prototype.toString = function () {
        return ('Website {' +
            "name: '" +
            this.name +
            "'" +
            ", cms: '" +
            this.CMS +
            "'" +
            ', price: ' +
            this.price +
            '}');
    };
    return Website;
}());
exports.Website = Website;
