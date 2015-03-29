'use strict';

var GivePage = require('./givePage.js');
var InspirePage = require('./inspirePage.js');
var ReceivePage = require('./receivePage.js');
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
    GiveImage: {
        get: function () {
            return element(by.xpath("//img[contains(@src,'welcome/gift.jpg')]"));
        }
    },
    Receive: {
        get: function () {
            return element(by.xpath("//img[contains(@src,'/welcome/treasure.jpg')]"));
        }
    },
    Inspire: {
        get: function () {
            return element(By.xpath("//img[contains(@src,'welcome/get_started.jpg')]"));
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
            return element(by.css("[ng-click='oForgot()']")).getText();
        }
    },
    ClickGiveImage: {
        get: function () {
            this.GiveImage.click();
            return new GivePage();
        }
    },
    ClickReceiveImage: {
        get: function () {
            this.Receive.click();
            return new ReceivePage();
        }
    },
    ClickInspirePage: {
        get: function () {
            this.Inspire.click();
            return new InspirePage();
        }
    }
});

module.exports = giftengHomePage;