https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#6-bound-function

function multiply(number) {
  'use strict';
  console.log('this e number - ' + this + ' * ' + number);
  console.log(this * number);
  
}

// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
double(3); // => 6
double(10); // => 20