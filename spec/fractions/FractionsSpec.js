'use strict';

// ******* TODO LIST **********
// 1/0 ??             Error - 0 division
// 2,1/2 ??           Error - not allowed

// 3/3 + 4/4 = ??     whole numbers, expressed as fraction
// 1/3 + 2/3 = 3/3    result full number
// 3 + 4 = 7          whole integers  
// toString()        
// 1/1 toString ??
// largeNr/largeNr  +  largeNr+1/largeNr  --> causes overflow, but could be calculated if optimization in place
// TODO: Refa: better test names

describe("Fractions library", function () {
  var Fraction = require('../../lib/fractions/Fraction');

  describe("New Fraction creation", function () {
    describe("Init with 1/2", function () {
      var f;
      beforeEach(function () {
        f = new Fraction(1, 2);
      });

      it("should return 1 as nominator", function () {
        expect(f.numerator()).toEqual(1);
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
        expect(f.numerator()).toEqual(3);
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
          var f2 = new Fraction(0, 1);
          sum = f.add(f2);
        });

        it("should return 0 as nominator", function () {
          expect(sum.numerator()).toEqual(0);
        });
        it("should return 1 (from first fraction) as denominator", function () {
          expect(sum.denominator()).toEqual(1);
        });
      });

      describe("Same Denominator", function () {
        var sum;
        beforeEach(function () {
          var f = new Fraction(1, 1);
          var f2 = new Fraction(1, 1);
          sum = f.add(f2);
        });

        it("should return addition", function () {
          expect(sum.numerator()).toEqual(2);
          expect(sum.denominator()).toEqual(1);
        });
      });


      describe("Same Denominator", function () {
        var sum;
        beforeEach(function () {
          var f = new Fraction(1, 4);
          var f2 = new Fraction(2, 4);
          sum = f.add(f2);
        });

        it("should return addition.", function () {
          expect(sum.numerator()).toEqual(3);
          expect(sum.denominator()).toEqual(4);
        });
      });

      describe("Expand Denominator", function () {
        it("should expand 2nd denominator.", function () {
          var sum = new Fraction(1, 6).add(new Fraction(2, 3));
          expect(sum.numerator()).toEqual(5);
          expect(sum.denominator()).toEqual(6);
        });

        it("should expand 2nd denominator.", function () {
          var sum = new Fraction(1, 8).add(new Fraction(3, 4));
          expect(sum.numerator()).toEqual(7);
          expect(sum.denominator()).toEqual(8);
        });


        it("should expand 1st denominator.", function () {
          var sum = new Fraction(2, 3).add(new Fraction(1, 6));
          expect(sum.numerator()).toEqual(5);
          expect(sum.denominator()).toEqual(6);
        });

        it("should expand 1st denominator.", function () {
          var sum = new Fraction(3, 4).add(new Fraction(1, 8));
          expect(sum.numerator()).toEqual(7);
          expect(sum.denominator()).toEqual(8);
        });

        it("should expand both denominator.", function () {
          var sum = new Fraction(1, 2).add(new Fraction(1, 3));
          expect(sum.numerator()).toEqual(5);
          expect(sum.denominator()).toEqual(6);
        });

        it("should expand both denominator.", function () {
          var sum = new Fraction(7, 3).add(new Fraction(4, 5));
          expect(sum.numerator()).toEqual(47);
          expect(sum.denominator()).toEqual(15);
        });
      });

      describe("A Fraction that nominator is multiple of denominator", function () {
        it("3/3 should reduce.", function () {
          var f = new Fraction(3, 3);
          expect(f.numerator()).toEqual(1);
          expect(f.denominator()).toEqual(1);
        });

        it("6/3 should reduce.", function () {
          var f = new Fraction(6, 3);
          expect(f.numerator()).toEqual(2);
          expect(f.denominator()).toEqual(1);
        });
      });

      describe("A Fraction multi of 3", function () {
        it("should reduce.", function () {
          var f = new Fraction(3, 6);
          expect(f.numerator()).toEqual(1);
          expect(f.denominator()).toEqual(2);
        });

        it("should reduce.", function () {
          var f = new Fraction(9, 12);
          expect(f.numerator()).toEqual(3);
          expect(f.denominator()).toEqual(4);
        });

      });

      describe("A Fraction multi of 2", function () {
        it("should reduce.", function () {
          var f = new Fraction(2, 4);
          expect(f.numerator()).toEqual(1);
          expect(f.denominator()).toEqual(2);
        });

        it("should reduce.", function () {
          var f = new Fraction(6, 8);
          expect(f.numerator()).toEqual(3);
          expect(f.denominator()).toEqual(4);
        });
      });

      describe("A Fraction multi of 4", function () {
        it("should reduce.", function () {
          var f = new Fraction(8, 24);
          expect(f.numerator()).toEqual(1);
          expect(f.denominator()).toEqual(3);
        });

        it("should reduce.", function () {
          var f = new Fraction(12, 40);
          expect(f.numerator()).toEqual(3);
          expect(f.denominator()).toEqual(10);
        });
      });

      describe("Fraction Addition that returns reduced", function () {
        it("should reduce.", function () {
          var sum = new Fraction(2, 4).add(new Fraction(2, 8));
          expect(sum.numerator()).toEqual(3);
          expect(sum.denominator()).toEqual(4);
        });
      });

    });
  });
});
