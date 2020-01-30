
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x===0 || x===1) return x;
  let left = 1, right = Math.ceil(x/2) + 1;
  let mid;
  while(left < right) {
      if(left + 1 === right) {
          return left;
      }
      mid = Math.floor((left+right)/2);
      if(mid * mid > x) {
          right = mid;
      } else if(mid * mid < x) {
          left = mid;
      } else {
          return mid;
      }
  }
};

// [left, right) 写递归效率太慢啦
function helper(left, right, x) {
  let mid = Math.floor((left+right)/2);
  if(left * left > x) {
      return 0;
  }
  if(left+1 === right) {
      if(left * left <= x && right * right > x) {
          return left;
      } else {
          return 0;
      }
  }
  return helper(left, mid, x) + helper(mid, right, x);
}