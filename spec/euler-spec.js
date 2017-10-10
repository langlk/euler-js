var Euler = require('./../js/euler.js').eulerModule;

describe('evenFibonacci', function() {
  it('should return 4613732', function(){
    var euler = new Euler();
    expect(euler.evenFibonacci()).toEqual(4613732);
  });
});

describe('isPrime', function() {
  it('should return true if a number is prime', function() {
    var euler = new Euler();
    expect(euler.isPrime(5)).toEqual(true);
  });

  it('should return false if a number is not prime', function() {
    var euler = new Euler();
    expect(euler.isPrime(25)).toEqual(false);
  });
});

describe('largestPrimeFactor', function() {
  it('should return the largest prime factor of a number', function() {
    var euler = new Euler();
    expect(euler.largestPrimeFactor(13195)).toEqual(29);
    // expect(euler.largestPrimeFactor(600851475143)).toEqual(6857);
  });
});

describe('isPal', function() {
  it('should tell if a number is a palendrome', function() {
    var euler = new Euler();
    expect(euler.isPal(1001)).toEqual(true);
  });
});

describe('largestPal', function() {
  it('should tell if a number is the largest pal', function() {
    var euler = new Euler();
    expect(euler.largestPal()).toEqual(906609);
  });
});

describe('factors', function() {
  it('should return the prime factors of a number', function() {
    var euler = new Euler();
    expect(euler.factors(20)).toEqual([2, 2, 5]);
  });
});

describe('smallestMultiple', function() {
  it('should return the smallest number divisible by all numbers from one to number, inclusive', function() {
    var euler = new Euler();
    expect(euler.smallestMultiple(20)).toEqual(232792560);
  });
});

describe('smallestMultiple', function() {
  it('should return the smallest number divisible by all numbers from one to number, inclusive', function() {
    var euler = new Euler();
    expect(euler.sumSquareDifference(100)).toEqual(25164150);
  });
});

describe('enthPrime', function() {
  it('should find the largest prime', function() {
    var euler = new Euler();
    expect(euler.enthPrime(6)).toEqual(13);
  })
})
