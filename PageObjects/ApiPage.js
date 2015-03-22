/**
 * Created by Saifur on 3/21/2015.
 */

var BasePage = require('./basePage.js');

module.exports = function(){

    this.search = element(by.model('q'));
    //var basePage =  new BasePage();

    this.navigateToPage = function(){
        browser.get('https://docs.angularjs.org/api');
    };

    this.clickNgCoreModule = function(){
        element.all(by.css("[href='api/ng']")).first().click();

    };

    this.SearchApi = function(api){
        this.search.sendKeys(api);
    };
};
