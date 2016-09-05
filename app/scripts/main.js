// Need to change the "selected" of the drop down menu


// base currency for comparing to other currencies
var base =   $('#CurrencyFrom option:selected').val()
var btnGetExchangeRate = $('#btnGetExchangeRate')

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



btnGetExchangeRate.click(
(function getExchangeRate() {
   
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
          if (data.length !=0)
          {
              
              // Get the returned data
            var _currencyFrom =  $('#CurrencyFrom option:selected').val();
            var _currencyTo =  $('#CurrencyTo  option:selected').val();
             var exchangeRate = data.rates[_currencyTo];
           
lblFrom.html(_currencyFrom);
txtTo.html(_currencyTo);
              console.log(exchangeRate);
        // Have to use Jquery to get the value here, can't just use "txtTo or txtFrom"
        $('#txtTo').val(exchangeRate *  $('#txtFrom').val() );
       


 }



//})
  //

})}))
