"use strict";

$(document).ready(function() {
console.log($.isNumeric(6)) // true
console.log($.isNumeric("Hello")) // false
console.log($.isNumeric(-56.835)) // true
console.log($.isNumeric("67")) // true
console.log($.isNumeric("67u")) // false
});
