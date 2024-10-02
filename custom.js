"use strict";

$(document).ready(function() {
 $("#EpicButton").click(function(){
   $.post("favourites.php",{
    "food" : "pizza",
    "game": "Half-Life 3"
   }   ,function(data, status){
    console.log(data);
   })

 })


});
