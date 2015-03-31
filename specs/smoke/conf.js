'use strict';
var jasmineReporters = require('jasmine-reporters');

exports.config = {
    /* seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
     ** enables to connect to the browsers directly.
     ** http://stackoverflow.com/questions/27889488/cannot-run-protractor-on-internet-explorer-11
     */
    framework: 'jasmine2',
    directConnect: true,
    specs: ['giftengHomePageTests.js'],

    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    },

    /**
     * {
     * 'browserName': 'internet explorer'
     * }
     * */

    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true,
        includeStackTrace: true
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            savePath: './reports/',
            consolidateAll: true
        }));

        browser.driver.manage().window().maximize();
    }
}
