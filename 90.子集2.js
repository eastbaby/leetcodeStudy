// 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a,b) => a-b);
  let len = nums.length;
  let res = [];
  const backtrace = (path, start) => {
      res.push(path);
      if(path.len === len || start >= len) {
          return;
      }
      for(let i = start; i<len; i++) {
          if(i === start || (i>0 && nums[i] !== nums[i-1])) {
              backtrace(path.concat(nums[i]), i+1);
          }
      }
  }
  backtrace([], 0);
  return res;
};