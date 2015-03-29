'use strict';

var BasePage = require('./baseProtractorPage.js');

var receivePage = function(){
    var basePage  = new BasePage();
};

receivePage.prototype = Object.create({},{

});

module.exports = receivePage;