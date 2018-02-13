'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900', '2000'];

var pikeStore = {
    location: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    cookieAvg: 6.3,
    totPerHour:[],
    custPerHour: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
    },
    cookiePerHour: function () {
        for (hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    }
}
 

