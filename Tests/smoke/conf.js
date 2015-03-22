/**
 * Created by Saifur on 3/21/2015.
 */

exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect:true, // enables to connect to the browsers directly. http://stackoverflow.com/questions/27889488/cannot-run-protractor-on-internet-explorer-11
    specs: ['apiDocsPageTests.js'],

    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    },

    //{
    //    'browserName': 'internet explorer'
    //}

    ],

    onPrepare: function(){
        browser.driver.manage().window().maximize();
    }
}
