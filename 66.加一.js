/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  for(let i=len-1; i>=0; i--) {
      if(digits[i] + 1 < 10) {
          digits[i] = digits[i] + 1;
          return digits;
      } else {
          digits[i] = digits[i] + 1 - 10;
      }
  }
  digits.unshift(1);
  return digits;
};