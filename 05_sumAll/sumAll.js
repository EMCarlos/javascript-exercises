const sumAll = function (min, max) {
  if ((min || max) < 0) return "ERROR";
  if (typeof min != "number" || typeof max != "number") return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  for (let i = min; i <= max; i++) {
    let n = i;
    array.push(n);
  }
  const sum = array.reduce((accumulator, curr) => accumulator + curr);
  return sum;
};

/* ODIN SOLUTION 
    const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
    };
*/

// Do not edit below this line
module.exports = sumAll;
