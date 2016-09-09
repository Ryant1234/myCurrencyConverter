"use strict";

/// <reference path="C:\Users\Ryan\Documents\github\myCurrencyConverter\typings\jquery\jquery.d.ts" />
// Need to change the "selected" of the drop down menu
var exchangeFrom;
var exchangeTo;

var appInsights = require("applicationinsights");
appInsights.setup("c8f1738f-44b4-446d-837f-8de2fd72ee7f").start();

//        var exchangeRate = data.rates[_currencyTo];
// base currency for comparing to other currencies
var base = $('#CurrencyFrom option:selected').val();
var btnGetExchangeRate = $('#btnGetExchangeRate');
// Get button click going, get json data request going
// Remember to use console.log
//<label for="CurrencyFrom">
//var url = "http://api.fixer.io/latest?base=" + base;
// base = exchangeFrom value
//console.log(base);
var data = 'data';
var lblFrom = $('label[for=\'txtFrom\']');
var txtTo = $('label[for=\'txtTo\']');
//console.log(base);
btnGetExchangeRate.click(function getExchangeRate() {
    $.ajax({
        url: 'http://api.fixer.io/latest?base=' + base,
        beforeSend: function beforeSend(xhrObj) {
            // Request headers
            xhrObj.setRequestHeader('Content-Type', 'application/octet-stream');
            xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', 'd342c8d19d4e4aafbf64ed9f025aecc8');
        },
        type: 'GET',
        data: data
    }).done(function (data) {
        if (data.length != 0) {
            // Get the returned data
            exchangeFrom = $('#CurrencyFrom option:selected').val();
            exchangeTo = $('#CurrencyTo  option:selected').val();
            //exchangeRate is the exchange rate for the currency we have asked for 
            var exchangeRate = data.rates[exchangeTo];
            console.log(exchangeFrom);
            lblFrom.html(exchangeFrom);
            console.log(exchangeTo);
            txtTo.html(exchangeTo);
            // Have to use Jquery to get the value here, can't just use "txtTo or txtFrom"
            $('#txtTo').val(exchangeRate * $('#txtFrom').val());
        }
        //})
        //
    });
});
//# sourceMappingURL=app.js.map
