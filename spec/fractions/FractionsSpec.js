'use strict';

describe("New Fraction creation", function () {
  var Fraction = require('../../lib/fractions/Fraction');

  describe("Init with 1/2", function () {
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

  describe("Init with 3/4", function () {
    var f;
    beforeEach(function () {
      f = new Fraction(3, 4);
    });

    it("should return 3 as nominator", function () {
      expect(f.nominator()).toEqual(3);
    });

    it("should return 4 as denominator", function () {
      expect(f.denominator()).toEqual(4);
    });
  });

  describe("Fraction Addition", function () {
    describe("Nominator is 0", function () {
      var sum;
      beforeEach(function () {
        var f = new Fraction(0, 1);
        var f2 = new Fraction(0, 2);
        sum = f.add(f2);
      });

      it("should return 0 as nominator", function () {
        expect(sum.nominator()).toEqual(0);
      });
      it("should return 1 (from first fraction) as denominator", function () {
        expect(sum.denominator()).toEqual(1);
      });
    });
    
    describe("Deominator is 1, addition of Nominators", function () {
      var sum;
      beforeEach(function () {
        var f = new Fraction(1, 1);
        var f2 = new Fraction(1, 1);
        sum = f.add(f2);
      });

      it("should return 2 as nominator", function () {
        expect(sum.nominator()).toEqual(2);
      });
      it("should return 1 as denominator", function () {
        expect(sum.denominator()).toEqual(1);
      });
    });
  });
});



// TODO LIST
        // 0/1 + 0/2 = 0/??   0 nominator addition
        // 1/1 + 1/1 = 2/1    1 denominator addition
        // 1/4 + 2/4 = 3/4    same denominator
        // 1/3 + 2/3 = 3/3    result full number
        // 1/2 + 1/3 = 5/6    
        // 7/3 + 4/5 = 47/15  complex example, no simplification
        // 3/3 + 4/4 = ??     whole numbers, expressed as fraction
        // 3 + 4 = 7          whole integers  
        // 5/2 +           
        // 1/3 + 1/2 = 5/6    denominator expansion
        // 1/0 ??             Error - 0 division
        // 2 1/2 ??           Error - not allowed



