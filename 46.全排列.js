// 也可以用回溯法解 https://leetcode-cn.com/problems/combination-sum/solution/39-zu-he-zong-he-by-alexer-660/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if(nums.length === 1) {
      return [ nums ];
  }
  nums.sort((a,b) => a-b);
  let cur;
  let res = [];
  for(let i=0; i<nums.length; i++) {
      let first = nums[i];
      if(first !== cur) {
          cur = first;
          let rest = permuteUnique(nums.slice(0, i).concat(nums.slice(i+1)));
          res = res.concat(rest.map(item => {
              return [first].concat(item);
          }));
      }
  }
  return res;
};