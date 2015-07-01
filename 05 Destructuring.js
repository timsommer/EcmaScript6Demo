// Variables can be initialized in one go. 
// The following two lines have the same effect, 
// the first one is employing an array pattern.
var [m, d, y] = [3, 14, 1977];
var m = 3, d = 14, y = 1977;

// Swapping variables
x = 3; y = 4; [x, y] = [y, x]
temp = [y, x]; // > Array [ 3, 4 ]

// Array restructuring
function now() { return [2, 6, 2013, 8, 0]; }
var [m, d] = now(); // m = 2, d = 6
var [,,year] = now(); // year = 2013

// Matching object properties instead of array indices.
function today() { return { d: 6, m: 2, y: 2013 }; }
var { m: month, y: year } = today(); // month = 2, year = 2013

books.forEach(function ({ title: t, author: a }) { 
  console.log(t, a) 
});