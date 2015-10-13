'use strict';

describe("A test suite", function () {
  it("contains spec with an expectation", function () {
    // failing test?
    expect(true).toBe(true);
  });
});


describe("New Fraction creation", function () {
  var Fraction = require('../../lib/fractions/Fraction');
  var f;
  beforeEach(function () {
    f = new Fraction(1, 2);
  });

  it("should return 1 as nominator", function () {
    expect(f.nominator()).toEqual(1);
  });

  it("should return 2 as denominator", function () {
    expect(f.denominator()).toEqual(2);
  });
});



