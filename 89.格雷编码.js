/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if(n===0) return [0];
  let strRes = helper(n);
  let res = strRes.map(item => {
      return parseInt(item, 2);
  });
  return res;
};

// 元素'10' 代表 2^1 + 2^0
function helper(n) {
  if(n===1) return ['0', '1'];
  let prev = helper(n-1);
  let res1 = prev.map(item => {
      return item + '0';
  });
  let res2 = prev.reverse().map(item => {
      return item + '1';
  });
  return res1.concat(res2);
}