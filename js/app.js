'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900'];
var stores = [];
var totPerDay = [];


//calculates cookies bought per hour into var cookiePerHour the push to global array 
// function calcCookiePerHour () {
//     for (var i = 0; i < hours.length; i++) {
//         var cookiePerHour = 0;
//     }   
    
// };
// //calculates total cookies sold that day global var totPerDay
// function calcTotPerDay () {
//     for (var i = 0; i < stores.length; i++) {
//         totPerDay += stores[i].totalCookiesSoldPerDay;
//     }
// }
//functions are above this and constructor is below this

//object constructor that pushes to global stores array
function Store(location, minCust, maxCust, cookieAvg){

    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookieAvg = cookieAvg;
    this.custPerHour = [];
    this.totPerHour = [];
    this.totalCookiesSoldPerDay = 0;
    stores.push(this);
    this.calcCustPerHour();
    this.calcCookiePerHour();
    this.pushTotal();
 
};
//prototype methods below this
Store.prototype.calcCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
        this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    }
    
};
Store.prototype.calcCookiePerHour = function() {        //wont work now
        for (var i = 0; i < hours.length; i++) {
        var hourTot = Math.ceil(this.custPerHour[i] * this.cookieAvg);
        this.totPerHour.push(hourTot);      
        this.totalCookiesSoldPerDay += hourTot;   
          
    }

};

Store.prototype.pushTotal= function() {
    totPerDay.push(this.totalCookiesSoldPerDay)
};

Store.prototype.render = function() {
    
};

//call constructor to create stores
new Store('1st and pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

        
        
    
    
    
    
    

 
