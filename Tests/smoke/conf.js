/**
 * Created by Saifur on 3/21/2015.
 */

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['APIDocsPageTests.js'],

    onPrepare: function(){
        browser.driver.manage().window().maximize();
    }
}
