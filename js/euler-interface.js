var Euler = require('./../js/euler.js').eulerModule;

$(document).ready(function() {
  var euler = new Euler();
  alert(euler.largestPrimeFactor(600851475143));
});
