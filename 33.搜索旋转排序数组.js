/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    if(nums.length === 1) return nums[0] === target ? 0 : -1;
    let key = findKeyPoint(0, nums.length-1, nums);
   
    let sortNums = nums.slice(key).concat(nums.slice(0, key));
    let originRes = findTarget(0, nums.length-1, sortNums, target);
    if(originRes === -1) return -1;
    return (originRes + key) % nums.length; // 取模！！
};

// trick, 这里最好用左闭右闭比较好做判断
function findKeyPoint(left, right, nums) {
    if(left+1 === right) {
        if(nums[left] > nums[right]) {
            return right;
        } else {
            return 0;
        }
    }
    if(nums[left] < nums[right]) {
        return 0;
    }
    let mid = Math.floor((left+right)/2);
    let res1 = findKeyPoint(left, mid, nums);
    let res2 = findKeyPoint(mid, right, nums);
    if(res1 === 0 && res2 === 0) return 0;
    if(res1 === 0 && res2 !== 0) return res2;
    if(res1 !== 0 && res2 === 0) return res1;
}

function findTarget(left, right, nums, target) {
    if(left === right) {
        if(nums[left] === target) {
            return left;
        } else {
            return -1;
        }
    }
    if(nums[left] > target || nums[right] < target) {
        return -1;
    }
    let mid = Math.floor((left+right)/2);
    let res1 = findTarget(left, mid, nums, target);
    let res2 = findTarget(mid+1, right, nums, target);
    if(res1 === -1 && res2 === -1) return -1;
    if(res1 === -1 && res2 !== -1) return res2;
    if(res1 !== -1 && res2 === -1) return res1;
}