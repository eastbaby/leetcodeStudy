/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0;
    if(nums[0] >= target) return 0;
    if(nums[nums.length -1] < target) return nums.length;
    return helper(0, nums.length, nums, target);
};

function helper(left, right, nums, target) {
    if(nums[right] < target) return 0;
    if(left+1 === right) {
        if(nums[left] === target || (nums[left] > target && nums[left-1] < target)) {
            return left;
        } else {
            return 0;
        }
    }
    let mid = Math.floor((left+right)/2);
    return helper(left, mid, nums, target) + helper(mid, right, nums, target);
}