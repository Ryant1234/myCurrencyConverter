"use strict";var data="data";$("#btnGetExchangeRate").click(function(){$.ajax({url:"http://api.fixer.io/latest?base="+$("#CurrencyFrom option:selected").val(),beforeSend:function(e){e.setRequestHeader("Content-Type","application/octet-stream"),e.setRequestHeader("Ocp-Apim-Subscription-Key","d342c8d19d4e4aafbf64ed9f025aecc8")},type:"GET",data:data}).done(function(e){if(0!=e.length){var t=$("#CurrencyFrom option:selected").val(),a=$("#CurrencyTo option:selected").val(),o=e.rates[a];$("label[for='txtFrom']").html(t),$("label[for='txtTo']").html(a),console.log(o),$("#txtTo").val(o*$("#txtFrom").val())}})});