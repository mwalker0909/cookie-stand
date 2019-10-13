'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var conCurv = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

var City = function (place, cxMin, cxMax, cookieAvg) {

    this.place = place;
    this.cxMin = cxMin;
    this.cxMax = cxMax;
    this.cookieAvg = cookieAvg;
};

City.prototype.cxPerHour = function () {
    return Math.floor(Math.random() * (this.cxMax - this.cxMin + 1) + this.cxMin); 
}


City.prototype.hourSales = function () {
    var salesArray = [];
    for(var i = 0; i < hours.length; i++) {
        var cookieSales = Math.round((this.cxPerHour() * conCurv[i]) * this.cookieAvg);
        salesArray.push(cookieSales);
    }
    return salesArray;
};  

City.prototype.totalSales = function () {
    var profitSum = 0;
    for (var i = 0; i < this.hourSales().length; i++) {
        profitSum += this.hourSales()[i];
        
    }
    return (profitSum);
};
    
var tableHead = function () {
    
    var cityProfits = document.getElementById('cityProfits');
   
    var article = document.createElement('article');
    cityProfits.appendChild(article);

    var table = document.createElement('table');
    table.setAttribute('id', 'sales-table');
    article.appendChild(table); 

    var firstRow = document.createElement('tr');
    table.appendChild(firstRow);
    var th = document.createElement('th');
    th.textContent = '';
    firstRow.appendChild(th);
        for(var i = 0; i < hours.length; i++) {
            th = document.createElement('th');
            th.textContent = `${hours[i]}`;
            firstRow.appendChild(th);
        }
    var th = document.createElement('th');
    th.textContent = 'Daily Location Total';
    firstRow.appendChild(th);

  };

    var tableFooter = function () {
    var table = document.getElementById('sales-table');

    var firstRow = document.createElement('tr');
    table.appendChild(firstRow);

    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var td = document.createElement('td');
    td.textContent = 'Totals';
    
    firstRow.appendChild(td);
    for(var i = 0; i <= hours.length; i++) {
        td = document.createElement('td');
        firstRow.appendChild(td);
    }
};
    City.prototype.tableBody = function () {
        var table = document.getElementById('sales-table');
        var firstRow = document.createElement('tr');
        table.appendChild(firstRow);
        var td = document.createElement('td');
        td.textContent = `${this.place}`;
        firstRow.appendChild(td);

        for(var i = 0; i < this.hourSales().length; i++) {
            td = document.createElement('td');
            td.textContent = `${this.hourSales()[i]}`;
            firstRow.appendChild(td);
        }

        var td = document.createElement('td');
        td.textContent = `${this.totalSales()}`;
        firstRow.appendChild(td);
    };
    
    var seattle = new City('Seattle', 23, 65, 6.3);
    var tokyo = new City('Tokyo', 3, 24, 1.2);
    var dubai = new City('Dubai', 11, 38, 2.3);
    var paris = new City('Paris', 20, 38, 2.3);
    var lima = new City('Lima', 2, 16, 4.6);

(function renderSales () {
    tableHead();
    seattle.tableBody();
    tokyo.tableBody();
    dubai.tableBody();
    paris.tableBody();
    lima.tableBody();
    tableFooter();
   
})();

var addNewCityForm = document.getElementById=('add-new-city-form');

addNewCityForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault accredited to Travis's work
    var place = event.target.place.value;
    var cxMin = event.target.cxMin.value;
    var cxMax = event.target.cxMax.value;
    var cookieAvg = event.target.cookieAvg.value;

    var newCity = new City(place,cxMin,cxMax,cookieAvg);
    newCity.renderTBody ();
}

    
var seattle = new City('Seattle', 23, 65, 6.3);
var tokyo = new City('Tokyo', 3, 24, 1.2,);
var dubai = new City('Dubai', 11, 38, 2.3);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6);

// IIFE used to render tables
(function displaySales() {
  renderTBody();
  seattle.renderTBody();
  tokyo.renderTBody();
  dubai.renderTBody();
  paris.renderTBody();
  lima.renderTBody();
  tableFooter();

})();