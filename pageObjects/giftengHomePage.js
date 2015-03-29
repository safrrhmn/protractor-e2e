'use strict';

var BasePage = require('./baseProtractorPage.js');
var EC = protractor.ExpectedConditions;

var giftengHomePage = function () {
    browser.get('http://www.gifteng.com/');
};

giftengHomePage.prototype = Object.create({}, {

    loginButton: {
        get: function () {
            return element(by.css("[ng-if='!user.logged']>[type='button']"));
        }
    },
    email: {
        get: function () {
            return element(by.model('email'));
        }
    },
    password: {
        get: function () {
            return element(by.model("password"));
        }
    },
    signInButton: {
        get: function () {
            return element(by.css("[type='submit']"));
        }
    },
    forgotPasswordLink: {
        get: function () {
            return element(by.css("[ng-click='oForgot()']"));
        }
    },
    InvalidLogInUnSuccess: {
        get: function () {

            this.loginButton.click();
            browser.wait(EC.visibilityOf(this.email), 5000);
            this.email.clear();
            this.email.sendKeys("Test");
            this.password.clear();
            this.password.sendKeys("Test");
            this.signInButton.click();
        }
    }
});

module.exports = giftengHomePage