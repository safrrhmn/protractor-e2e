/**
 * Created by Saifur on 3/21/2015.
 */

var BasePage = require('./BasePage.js');

module.exports = function(){
    this.search = element(by.model('q'));

    var basePage =  new BasePage();

    this.SearchApi = function(api){
        this.search.sendKeys(api);
        this.search.sendKeys(protractor.Key.ENTER);
    };
};
