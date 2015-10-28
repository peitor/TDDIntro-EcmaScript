'use strict';

function findBiggestCommonDivisor(n, d) {
  for (var i = d; i >= 2; i--) {
    if (n % i == 0 && d % i == 0) {
      return i;
    }
  }
  return 0;  
}

function Fraction(n, d) {
  var biggestCommonDivisor = findBiggestCommonDivisor(n,d);
  if (biggestCommonDivisor > 0){ 
      this.n = n / biggestCommonDivisor;
      this.d = d / biggestCommonDivisor;
      return;
  }

  this.n = n;
  this.d = d;
}

Fraction.prototype.numerator = function () {
  return this.n;
};

Fraction.prototype.denominator = function () {
  return this.d;
};

Fraction.prototype.add = function (fraction) {
  if (this.d === fraction.d) {
    return new Fraction(this.n + fraction.n, this.d);
  }

// TODO REVIEW
// NOT NECESSARY! Optimization
//   if (this.d % fraction.d == 0 || fraction.d % this.d == 0) {
// 
//     if (this.d > fraction.d) {
//       return new Fraction(this.n + fraction.n * (this.d / fraction.d), this.d);
//     }
//     else {
//       return new Fraction(fraction.n + this.n * (fraction.d / this.d), fraction.d);
//     }
//   }

  return new Fraction(this.n * fraction.d
    + fraction.n * this.d,
    this.d * fraction.d);

};

module.exports = Fraction; 