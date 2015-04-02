'use strict';
(function () {

    var BasePage = require('./baseProtractorPage.js');

    var givePage = function () {
        var basePage = new BasePage();
    };

    givePage.prototype = Object.create({}, {});

    module.exports = givePage;
})();