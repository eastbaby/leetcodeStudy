// 本题的解法不是很优雅，动态规划条件可以优化。
// 一个比较trick的思路是尝试从头往后递归，而非从后往前递归，边界可能好算一点。
// 【!important】不要用闭包写，内存清不掉，leetcode执行各个case的时候没法清。老老实实函数里写helper或者cache传参都行。

/**
 * @param {string} s
 * @return {number}[p-0op]
 */
var numDecodings = function(s) {
  res = helperFib(s);
  helperFib('', true);
  return res;
};

const helperFib = (function() {
  let cache = [0];
  return function(s, clear=false) {
      if (clear) {
          cache = [0];
      }
      let len = s.length;
      if(cache[len] != null) {
          return cache[len];
      }
      if(len === 1) {
          let res = (s !== '0' ? 1 : 0);
          cache.push(res);
          return res;
      }
      let prev = helperFib(s.slice(0, -1));
      let prevprev = helperFib(s.slice(0, -2));
      let res = 0;
      if(s.slice(-1) !== '0') {
          res += prev;
      }
      if(parseInt(s.slice(-2)) <= 26 && parseInt(s.slice(-2)) >= 10) {
          if(len === 2) {
              prevprev = 1;
          }
          res += prevprev;
      }
      cache.push(res);
      return res;
  }
})();