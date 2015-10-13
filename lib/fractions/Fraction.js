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

Fraction.prototype.add = function (fraction) {
  if (this.d === fraction.d) {
    return new Fraction(this.n + fraction.n, this.d);
  }

  if (this.d % fraction.d == 0 || fraction.d % this.d == 0) {

    if (this.d > fraction.d) {
      return new Fraction(this.n + fraction.n * (this.d / fraction.d), this.d);
    }
    else {
      return new Fraction(fraction.n + this.n * (fraction.d / this.d), fraction.d);
    }
  }

  return new Fraction(this.n * fraction.d
    + fraction.n * this.d,
    this.d * fraction.d);

};

module.exports = Fraction; 