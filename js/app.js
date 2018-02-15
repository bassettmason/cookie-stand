'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900'];
var stores = [];
var totPerDay = [];
var cookieSales = document.getElementById('cookieSales');
var totalSum = 0

function makeHeader() {
        // create tr
    var cookieSales = document.getElementById('cookieSales')
    var trEl = document.createElement('tr');
    cookieSales.appendChild(trEl);
    // create th
    var thEl = document.createElement('th');
    // give th content (Name for an individual cat)
    thEl.textContent = 'Locations';
    // append the th
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {                         
        // create th
        thEl = document.createElement('th');
        // give th content (Color for an individual cat)
        thEl.textContent = hours[i];
        // append the th
        trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Totals'
    trEl.appendChild(thEl);
};    
function makeTotalRow(){
    var trEl = document.createElement('tr');
    cookieSales.appendChild(trEl);
    var tdEl = document.createElement('td')
    tdEl.textContent = 'Totals'
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++){
        var total = 0
        for (var j = 0; j < stores.length; j++){
        total += stores[j].totPerHour[i]
        }
        var tdEl = document.createElement('td')
        tdEl.textContent = total
        trEl.appendChild(tdEl);
        
    }
    for (var k = 0; k < stores.length; k++){
        
        totalSum = totalSum + stores[k].totalCookiesSoldPerDay
        console.log(stores[k].totalCookiesSoldPerDay)
        console.log(totalSum)
        
    }
    var tdEl = document.createElement('td')
    tdEl.textContent = totalSum
    trEl.appendChild(tdEl);
};

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
    this.render();
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
    var trEl = document.createElement('tr');
    cookieSales.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.totPerHour[i];
        trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSoldPerDay;
    trEl.appendChild(tdEl);
        
};

makeHeader();
//call constructor to create stores
new Store('1st and pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
makeTotalRow();

        
        
    
    
    
    
    

 
