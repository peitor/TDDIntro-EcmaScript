'use strict';

function Fraction(n, d) {

  if (n % d == 0) {
    this.n = n / d;
    this.d = 1;
  } 
  else if (n % 2 == 0 && d % 2 == 0) {
    this.n = n / 2;
    this.d = d / 2;
  }
  else if (n % 3 == 0 && d % 3 == 0) {
    this.n = n / 3;
    this.d = d / 3;
  }
  else {
    this.n = n;
    this.d = d;
  }
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