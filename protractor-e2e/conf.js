exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['HelloProtractor.js'],

    onPrepare: function(){
        browser.driver.manage().window().maximize();
    }
}
