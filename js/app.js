'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900'];
var stores = [];


function Store(location, minCust, maxCust, cookieAvg){

    this.location = location;
    this.totalCookiesSoldPerDay = 0;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookieAvg = cookieAvg;
    this.totPerHour = [];
    this.randCust =[];
    stores.push(this);
 


};
Store.prototype.custPerHour = function(){
    for (var i = 0; i < hours.length; i++){
    this.randCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)); //The maximum is inclusive and the minimum is inclusive 
    }
};
// Store.prototype.cookiePerHour = function(){
//     for (var i = 0; i < hours.length; i++) {
//         var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
//         this.totPerHour.push(hourTot);
//         this.totalCookiesSoldPerDay += hourTot;  
//     } 
// };
// new Store('pikeStore', 23, 65, 6.3);
        
    
    
    
    
    

 
