// 不错的题目
// 方法一：开辟空间逐次遍历；方法二：每次直跳能涉及最远的棋子，看是否跳到最后（better）
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump1 = function(nums) {
    let len = nums.length;
    if(len === 0) return false;
    if(len === 1) return true;
    let path = [...Array(len)].map(item => 0);
    for(let i=0; i<len-1; i++) {
        if(nums[i] !== 0) {
            for(let j=i+1; j<Math.min(len, i+nums[i]+1); j++) {
                path[j] ++;
            }
        }
    }
    let res = path.slice(1).every(item => item > 0);
    return res;
};

var canJump2 = function(nums) {
  let len = nums.length;
  if(len === 0) return false;
  let p = 0;
  while(true) {
      let max = nums[p];
      let nextp = p;
      for(let i=p; i<=p+nums[p]; i++) {
          let cur = nums[i] + i;
          if(cur > max) {
              max = cur;
              nextp = i;
          }
      }
      if(max >= nums.length-1) {
          return true;
      }
      if(nextp === p) {
          return false;
      }
      p = nextp;
  }
}