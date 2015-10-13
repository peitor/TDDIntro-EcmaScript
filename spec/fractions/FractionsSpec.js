'use strict';

describe("A test suite", function () {
  it("contains spec with an expectation", function () {
    // failing test?
    expect(true).toBe(true);
  });
});


describe("New Fraction creation", function () {
  var Fraction = require('../../lib/fractions/Fraction');
  var sum;
  beforeEach(function () {
    sum = new Fraction(1, 2);
  });

  it("should return 1 as nominator", function () {
    expect(sum.nominator()).toEqual(1);
  });

  it("should return 2 as denominator", function () {
    expect(sum.denominator()).toEqual(2);
  });
});



