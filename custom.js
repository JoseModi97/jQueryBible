"use strict";

$(document).ready(function() {
 var func = function(){
    console.log(this);
 }
 var object = 
 {
    food: "Pizza",
 }

 var proxyFunction  = $.proxy(func, object);

 proxyFunction();
});
