const fibonacci = function (num) {
  let number = Number(num);
  let fib = [0, 1];

  for (let i = 2; i <= number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  if (number < 0) return "OOPS";
  if (number <= 1) return number;
  return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
