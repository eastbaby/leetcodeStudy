// 和77题思路差不多。本题也可以用回溯（其实就是深搜的递归写法）
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let len = nums.length;
  if(len === 0) return [[]];
  let prev = [];
  let res = [[]];
  for(let i=0; i<len; i++) {
      if(prev.length === 0) {
          prev = [...Array(len)].map((item, index) => [index]);
      } else {
          // 在prev基础上再加一个数字
          let next = [];
          for(let lastIter of prev) {
              for(let k = lastIter[lastIter.length-1] + 1; k < len; k++) {
                  next.push(lastIter.concat([k]));
              }
          }
          prev = next;
      }
      res = res.concat(prev);
  }
  res = res.map((item) => {
      let trueItem = item.map((indexItem) => {
          return nums[indexItem];
      }) || [];
      return trueItem;
  })
  return res;
};