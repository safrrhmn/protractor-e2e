'use strict';

var GiftengHomePage = require('./../../pageObjects/giftengHomePage.js');
var GivePage = require('./../../pageObjects/givePage.js');
var BaseProtractorPage = require('./../../pageObjects/baseProtractorPage.js');

describe('gifteng page', function () {
    var giftengHomePage;
    var givePage;
    var basePage;

    beforeEach(function () {
        giftengHomePage = new GiftengHomePage();
        givePage = new GivePage();
        basePage = new BaseProtractorPage();
    });

    it('Should pop up sign in modal box', function () {
        expect(giftengHomePage.InvalidLogInUnSuccess).toBe('Forgot password');
    });

    it('Should navigate to gifteng Give page', function () {
        giftengHomePage.ClickGiveImage;
        expect(basePage.GetHeaderText).toMatch("Quickly post things you no longer need");
    });
});