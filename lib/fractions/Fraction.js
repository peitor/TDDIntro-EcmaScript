'use strict';

function Fraction(n, d) {
  this.n = n;
  this.d = d;
}

Fraction.prototype.nominator = function () {
  return this.n;
};

Fraction.prototype.denominator = function () {
  return this.d;
};


module.exports = Fraction; 