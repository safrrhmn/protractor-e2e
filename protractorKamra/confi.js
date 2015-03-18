/**
 * Created by Saifur on 3/18/2015.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    spec: ['HelloProtractor.js'],

    onPrepare:function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }
}
