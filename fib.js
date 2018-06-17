function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

var value = 0;
value = process.argv[2];

if (value < -10000 || value > 10000) {
	console.log("Превышение допустимого значения для рассчета")
} else {
	console.log(fib(value));

}
