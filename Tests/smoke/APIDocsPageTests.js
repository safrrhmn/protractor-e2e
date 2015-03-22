/**
 * Created by Saifur on 3/21/2015.
 */

var ApiPage = require('./../../pageObjects/apiPage.js');
var apiPage = new ApiPage();

describe("Navigating to the Angular Doc Page", function () {
    beforeEach(function () {
        apiPage.navigateToPage();
    });

    describe('Angular Doc HomePage', function () {
        it('Should Navigate to API page', function () {
            apiPage.clickNgCoreModule();
            var url = browser.driver.getCurrentUrl();
            expect(url).toMatch('api/ng');
        });
    });
});