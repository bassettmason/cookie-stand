'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900'];
var stores = [];
var totPerDay = [];
var cookiePerHourTot = [];
//generates a random #
// function randomNumberGenerator(min, max) {
//     var randomInt = Math.floor(Math.random() * max - min + 1) + min;
//         return randomInt

// };
//generates a random customer# per hour
function custPerHour () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
}
//calculates cookies bought per hour into var cookiePerHour the push to global array cookiePerHourTot
function calcCookiePerHour () {
    for (var i = 0; i < hours.length; i++) {
        var cookiePerHour = 0;
        for (var j; j < stores.length; j++)
        cookiePerHourTot += stores[j].totPerHour[i];
    }   
    cookiePerHourTot.push(cookiePerHour);
}
//calculates total cookies sold that day global var totPerDay
function calcTotPerDay () {
    for (var i = 0; i < stores.length; i++) {
        totPerDay += stores[i].totalCookiesSoldPerDay;
    }
}
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
 
};
//prototype methods below this
Store.prototype.calcCustPerHour = function() {
    for (var i; i < hours.length; i++) {
        this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust)
    }
    
}
Store.prototype.cookiePerHour = function() {        //wont work now
    this.calcCustPerHour()
    for (var i = 0; i < hours.length; i++) {
        var hourTot = Math.ceil(this.custPerHour[i] * this.cookieAvg);
        this.totPerHour.push(hourTot);      
        this.totalCookiesSoldPerDay += hourTot;      
    }
};

//call constructor to create stores

var pike = new Store('1st and pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

        
        
    
    
    
    
    

 
