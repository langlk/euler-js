function Euler() {

}

Euler.prototype.evenFibonacci = function () {
  var i = 1;
  var j = 2;
  var total = 0;
  while (j < 4000000){
    if (j % 2 === 0){
      total += j;
    }
    temp = i + j;
    i = j;
    j = temp;
  }
  return total;
};

Euler.prototype.isPrime = function(number) {
  for (var i = 2; i < (number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

Euler.prototype.largestPrimeFactor = function (number) {
  var target = number;
  var i = 2;
  while (i < target) {
    while (target % i === 0) {
      console.log('target is ' + target + ' and is divisible by ' + i);
      target = target/i;
    }
    i++;
  }
  return target;
};

exports.eulerModule = Euler;
