'use strict';


var hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600','1700', '1800','1900'];

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
        
        for (var hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    },
    render: function() {
        var pikeList = document.getElementById('pike');
        this.custPerHour();
        this.cookiePerHour();
        
        for (var i = 0; i < hours.length; i++) {
          // create an element
          var newLi = document.createElement('li');
          // give it content
          newLi.textContent = hours[i] + ': ' + this.totPerHour[i];
          // append it to the DOM
          // parent.appendChild(child)
          pikeList.appendChild(newLi);
        }
    }
    
};

var seaTacStore = {
    location: '1st and Pike',
    minCust: 3,
    maxCust: 24,
    cookieAvg: 1.2,
    totPerHour:[],
    custPerHour: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
    },
    cookiePerHour: function () {
        
        for (var hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    },
    render: function() {
        var seaTacList = document.getElementById('seaTac');
        this.custPerHour();
        this.cookiePerHour();
        
        for (var i = 0; i < hours.length; i++) {
          // create an element
          var newLi = document.createElement('li');
          // give it content
          newLi.textContent = hours[i] + ': ' + this.totPerHour[i];
          // append it to the DOM
          // parent.appendChild(child)
          seaTacList.appendChild(newLi);
        }
    }
    
};

var seattleStore = {
    location: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    cookieAvg: 3.7,
    totPerHour:[],
    custPerHour: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
    },
    cookiePerHour: function () {
        
        for (var hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    },
    render: function() {
        var seattleList = document.getElementById('seattle');
        this.custPerHour();
        this.cookiePerHour();
        
        for (var i = 0; i < hours.length; i++) {
          // create an element
          var newLi = document.createElement('li');
          // give it content
          newLi.textContent = hours[i] + ': ' + this.totPerHour[i];
          // append it to the DOM
          // parent.appendChild(child)
          seattleList.appendChild(newLi);
        }
    }
    
};

var capitolStore = {
    location: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    cookieAvg: 2.3,
    totPerHour:[],
    custPerHour: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
    },
    cookiePerHour: function () {
        
        for (var hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    },
    render: function() {
        var capitolList = document.getElementById('capitol');
        this.custPerHour();
        this.cookiePerHour();
        
        for (var i = 0; i < hours.length; i++) {
          // create an element
          var newLi = document.createElement('li');
          // give it content
          newLi.textContent = hours[i] + ': ' + this.totPerHour[i];
          // append it to the DOM
          // parent.appendChild(child)
          capitolList.appendChild(newLi);
        }
    }
    
};

var alkiStore = {
    location: 'Alki',
    minCust: 2,
    maxCust: 16,
    cookieAvg: 4.6,
    totPerHour:[],
    custPerHour: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; //The maximum is inclusive and the minimum is inclusive 
    },
    cookiePerHour: function () {
        
        for (var hourNumb = 0; hourNumb < hours.length; hourNumb++) {
            var hourTot = Math.ceil((this.custPerHour() * this.cookieAvg));
            this.totPerHour.push(hourTot);            
        }
        console.log(this);
    },
    render: function() {
        var alkiList = document.getElementById('alki');
        this.custPerHour();
        this.cookiePerHour();
        
        for (var i = 0; i < hours.length; i++) {
          // create an element
          var newLi = document.createElement('li');
          // give it content
          newLi.textContent = hours[i] + ': ' + this.totPerHour[i];
          // append it to the DOM
          // parent.appendChild(child)
          alkiList.appendChild(newLi);
        }
    }
    
};




pikeStore.render();
seaTacStore.render();
seattleStore.render();
capitolStore.render();
alkiStore.render();


 

