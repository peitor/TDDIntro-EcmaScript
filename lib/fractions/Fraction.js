'use strict';

function Fraction(n, d) {
  if (n % d == 0) {
    this.n = n / d;
    this.d = 1;
    return;
  }

  // REVIEW
  // WHAT IS THIS???
  for (var i = d; i >= 2; i--) {
    if (n % i == 0 && d % i == 0) {
      this.n = n / i;
      this.d = d / i;
      return;
    }
  }

  this.n = n;
  this.d = d;
}

Fraction.prototype.nominator = function () {
  return this.n;
};

Fraction.prototype.denominator = function () {
  return this.d;
};

Fraction.prototype.add = function (fraction) {
  if (this.d === fraction.d) {
    return new Fraction(this.n + fraction.n, this.d);
  }


// REVIEW
// NOT NECESSARY!
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