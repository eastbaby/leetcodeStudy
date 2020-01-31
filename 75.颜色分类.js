// 扫描一遍

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let countZero = 0;
  let countTwo = 0;
  let p = 0;
  while(p<nums.length - countTwo) {
      if(nums[p] === 2) { // 这里递归条件也可以是遇到 2，p不动
          if(p === nums.length-1-countTwo) {
              p++;
          } else {
              swap(p, nums.length-1-countTwo, nums);
          }
          countTwo++;
      } else if(nums[p] === 0) {  // 这里递归条件也可以是遇到 0，p一定++（因为和0交换的数字前面循环的时候都处理过，一定不是0
          if(p === countZero) {
              p++;
          } else {
              swap(p, countZero, nums);
          }
          countZero++;
      } else {
          p++;
      }
  }
};

function swap(a,b, nums) {
  let tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}