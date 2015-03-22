/**
 * Created by Saifur on 3/21/2015.
 */

var ApiPage = require('./../../PageObjects/ApiPage.js');

describe("Navigating to the Angular Doc Page", function () {
    var apiPage = new ApiPage();

    beforeEach(function () {
        browser.get('https://docs.angularjs.org/api');
    });

    describe('Angular Doc HomePage', function () {
        it('Should Navigate to API page', function () {
            apiPage.search('protractor');
            //expect(basePage.getUrlOfCurrentPage).toMatch('angular.bootstrap');
        });
    });
});