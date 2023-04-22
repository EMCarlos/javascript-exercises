const palindromes = function (string) {
  let re = /[\W_]/g;
  let regString = string.toLowerCase().replace(re, "");
  let reverseString = regString.split("").reverse().join("");

  return regString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
