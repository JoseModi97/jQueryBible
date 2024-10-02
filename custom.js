"use strict";

$(document).ready(function() {

   var array = ["Batman", "Pizza", "Yoda"];
   var html = '';
   html += '<ul>'
   $.each(array, function(index, value){
    console.log(`${index}: ${value}`);
    html += '<li>' + value + '</li>';
   });
   html += '</ul>'
   
   $("#EpicButton").click(function(){
        $("div").html(html);
   });
});
