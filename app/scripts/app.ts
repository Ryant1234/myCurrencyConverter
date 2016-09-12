
//I've installed everything to do with typescript but am still having problems when I don't include the reference path
// For some reason my typescript was pointing at a 1.0.3 folder instead of the most recent one 
// in "Environmental Variables in Control Panel\System\Advanced system Settings"
// I still have trouble with certain Jquery extensions unfortunetly

// In the future it would be good to find out how to save the JSON data so we only need to grab it once
// Probably has something to do with events? 

/// <reference path="C:\Users\Ryan\Documents\github\myCurrencyConverter\typings\jquery\jquery.d.ts" />


//  The currency we want to exchange from. 
 var exchangeFrom:string;

var exchangeTo:string; 

// This is the currency we want to exchange from. We send this to where we request the JSON from
var base:string;

var btnGetExchangeRate = $('#btnGetExchangeRate');


var data:string = 'data';

// lblFrom just displays the currency code for the  currency we are exchanging from 
// next to the amount we want to compare 
var lblFrom = $('label[for=\'txtFrom\']');
var txtFrom = $("#txtFrom");

//lblTo is the label for  where we display the exchange rate for the currency we want to exchange to.
var lblTo = $('label[for=\'txtTo\']');



 
btnGetExchangeRate.click((function getExchangeRate() {
    // For some reason I could not use != below
    // If the value(countries currency) in both of the drop down boxes is the same 
    if ($('#CurrencyFrom option:selected').val() == $('#CurrencyTo  option:selected').val()) {
        // Display text on the web page to the user telling them why the action cannot be peformed
        $('.hiddentext').css('display', 'inline');
        $(".hiddentextwarning").text("You cannot convert a currency to itself, please change an option");
    }
    else 
    // If the currencys are not the same
    {
        // If we have an amount in the textFrom textbox
        if (txtFrom.val().length != 0) {
            // Hide the alert message 
            $('.hiddentext').css('display', 'none');
            base = $('#CurrencyFrom option:selected').val();
            $.ajax({
                url: 'http://api.fixer.io/latest?base=' +
                    base,
                beforeSend: function (xhrObj) {
                    // Request headers
                    xhrObj.setRequestHeader('Content-Type', 'application/octet-stream');
                    xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', 'd342c8d19d4e4aafbf64ed9f025aecc8');
                },
                type: 'GET',
                data: data
            })
                .done(function (data) {
                // If data is returned
                if (data.length != 0) {
                    exchangeFrom = $('#CurrencyFrom option:selected').val();
                    exchangeTo = $('#CurrencyTo  option:selected').val();
                    // Here we are grabbing the value for the currency we have asked for
                    // From the Rates Object in data
                    var exchangeRate = data.rates[exchangeTo];
                    //console.log(exchangeFrom) 
                    //display the currency code for what we are exchanging from
                    lblFrom.html(exchangeFrom);
                    //console.log(exchangeTo)
                    lblTo.html(exchangeTo);
                    // Have to use Jquery to get the value here, can't just use "txtTo or txtFrom"
                    $('#txtTo').val($('#txtFrom').val() * exchangeRate);
                }
                else { // Data has not come back, the owner needs to sort this out if its a reoccoring issue
                    $('.hiddentext').css('display', 'inline');
                    $(".hiddentextwarning").text("We seem to be having a problem, please try again later");
                }
            });
        }
        else {// When no amount has been entered for conversion
            $('.hiddentext').css('display', 'inline');
            $(".hiddentextwarning").text("Please enter an amount to be converted");
        }
    }
}));

