'use strict';

(function () {
    var baseProtractorPage;

    baseProtractorPage = function () {

    };

    baseProtractorPage.prototype = Object.create({}, {
        GetHeaderText: {
            get: function () {
                return element(by.css("h4")).getText()
            }
        }
    });

    module.exports = baseProtractorPage;
})();