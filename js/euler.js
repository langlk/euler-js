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
  for (var i = 2; i < number; i++) {
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

Euler.prototype.isPal = function(pal) {
  pal = pal.toString();
  return pal === pal.split("").reverse().join("");
}

Euler.prototype.divCheck = function(number) {
  var target = number;
  var i = 999;
  while (i > 100) {
    while (target % i === 0) {
      a = (target / i).toString();
      b = i.toString();
      if(a.length === 3 && b.length === 3){
        return true;
      }
      target = target/i;
    }
    i--;
  }
  return false;
}

Euler.prototype.largestPal = function() {
  var max = 998001;
  while(max > 0){
    if (this.isPal(max)){
      if (this.divCheck(max)){
        return max;
      }
    }
    max--;
  }
}

Euler.prototype.factors = function (number) {
  if(this.isPrime(number)) {
    return [number];
  } else {
    var factors = [];
    var target = number;
    var i = 2;
    while (i < target) {
      if (target % i === 0) {
        factors = factors.concat(this.factors(i));
        factors = factors.concat(this.factors(target/i));
        return factors;
      }
      i++;
    }
    return factors;
  }
};

Euler.prototype.smallestMultiple = function(number) {
  var allFactors = [];
  for (var i = 1; i <= number; i++) {
    if (this.isPrime(i)) {
      allFactors.push(i);
    } else {
      var factors = this.factors(i)
      var currentProduct = allFactors.reduce((a, b) => a * b);
      var toAdd = [];
      for (var j = 0; j < factors.length; j++) {
        if (currentProduct % factors[j] != 0) {
          toAdd.push(factors[j]);
        } else {
          currentProduct = currentProduct / factors[j];
        }
      }
      allFactors = allFactors.concat(toAdd);
    }
  }
  console.log(allFactors)
  return allFactors.reduce((a, b) => a * b);
}

exports.eulerModule = Euler;
