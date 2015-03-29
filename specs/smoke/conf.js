'use strict';

exports.config = {
    /* seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
     ** enables to connect to the browsers directly.
     ** http://stackoverflow.com/questions/27889488/cannot-run-protractor-on-internet-explorer-11
     */

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
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }
}
