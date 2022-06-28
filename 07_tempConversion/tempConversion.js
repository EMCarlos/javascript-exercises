const ftoc = function (fahrenheit) {
  // 	[°C] = ([°F] − 32) × 5⁄9
  let conversion = (fahrenheit - 32) * (5 / 9);

  return Number(conversion.toFixed(1));
};

const ctof = function (celsius) {
  // [°F] = [°C] × 9⁄5 + 32
  let conversion = celsius * (9 / 5) + 32;

  return Number(conversion.toFixed(1));
};

/* ODIN SOLUTION
  toFixed() could fail so the best answer is:
  const ftoc = function(f) {
    return Math.round((f - 32) * (5/9) * 10) / 10;
  };

  const ctof = function(c) {
    return Math.round(((c * 9/5) + 32) * 10) / 10;
  };
*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
