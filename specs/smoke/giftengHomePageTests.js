'use strict';

var GiftengHomePage = require('./../../pageObjects/giftengHomePage.js');

describe('gifteng page', function () {
    var giftengHomePage;

    beforeEach(function () {
        giftengHomePage = new GiftengHomePage();
    });

    it('Should navigate to gifteng home page', function () {
        giftengHomePage.InvalidLogInUnSuccess;
        expect(element(by.css("[ng-click='oForgot()']")).getText()).toBe('Forgot password');
    });
});