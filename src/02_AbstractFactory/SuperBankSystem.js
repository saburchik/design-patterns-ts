"use strict";
exports.__esModule = true;
var BankingTeamFactory_1 = require("./banking/BankingTeamFactory");
var SuperBankSystem = /** @class */ (function () {
    function SuperBankSystem() {
        var projectTeamFactory = new BankingTeamFactory_1.BankingTeamFactory();
        var developer = projectTeamFactory.getDeveloper();
        var tester = projectTeamFactory.getTester();
        var projectManager = projectTeamFactory.getProjectManager();
        console.log('Creating a bank system...');
        developer.writeCode();
        tester.testCode();
        projectManager.managerProject();
    }
    return SuperBankSystem;
}());
new SuperBankSystem();
