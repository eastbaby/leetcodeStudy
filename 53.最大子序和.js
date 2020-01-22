// 方法一：O(n). 注意负数的处理
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    let cur = 0;
    let start = 0;
    let i=0;
    while(i<nums.length) {
        cur += nums[i];
        max = cur < max ? max : cur;
        if(cur<=0) {
            i++;
            start = i+1;
            cur = 0;
        } else {
            i++;
        }
    }
    return max;
};