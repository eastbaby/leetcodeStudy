/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return climbClosure(n);
};

const climbClosure = (function() {
  let arr = [1, 1, 2];
  return function(n) {
      if(arr[n]) {
          return arr[n];
      }
      let res = climbClosure(n-1) + climbClosure(n-2);
      arr.push(res);
      return res;
  }
})();