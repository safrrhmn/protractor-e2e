/**
 * Created by Saifur on 3/18/2015.
 */
describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
})