/**
 * @param {number[]} nums
 * @return {number}
 */
// 如果题目要求是不管数组后面是啥数的话，可以考虑（无脑往前面重新赋值，两两swap，etc）
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let numCount = 0;
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        if(i>0 && nums[i] > nums[i-1]) {
            numCount = 0;
        }
        numCount ++;
        if(numCount < 3) {
            nums[count] = nums[i];
            count ++;
        }
    }
    return count;
};