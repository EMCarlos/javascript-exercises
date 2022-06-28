const repeatString = function (string, num) {
  n = num + 1;
  if (num < 0) return "ERROR";
  return Array(n).join(string);
};

/* ODIN SOLUTION
    const repeatString = function(word, times) {
        if (times < 0) return 'ERROR';
        let string = '';
        for (let i = 0; i < times; i++) {
            string += word;
        }
        return string;
    };
*/

// Do not edit below this line
module.exports = repeatString;
