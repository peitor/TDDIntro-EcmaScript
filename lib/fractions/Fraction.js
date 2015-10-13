'use strict';

function Fraction() {
} 

Fraction.prototype.nominator = function() {
  return 1;
};

Fraction.prototype.denominator = function() {
  return 2;
};


module.exports = Fraction; 