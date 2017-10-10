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
  })
})

describe('largestPal', function() {
  it('should tell if a number is the largest pal', function() {
    var euler = new Euler();
    expect(euler.largestPal()).toEqual(906609);
  })
})
