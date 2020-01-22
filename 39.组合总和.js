// 经典递归/回溯法的题目，可以看看别人的解法(另一种更简洁的思路，经典回溯 https://leetcode-cn.com/problems/combination-sum/solution/39-zu-he-zong-he-by-alexer-660/)

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(target === 0) return [];
    if(candidates.length === 1) {
        if(target % candidates[0] === 0) {
            let divid = target / candidates[0];
            return [ initArray(divid, candidates[0])];
        } else {
            return []; // 注意是[] 而非 [[]]
        }
    }
    let res = [];
    let i = 0;
    while(candidates[candidates.length - 1] * i <= target) {
        let prev = combinationSum(candidates.slice(0, candidates.length-1), target-candidates[candidates.length - 1] * i);
        let cand = prev.map(item => {
            let newArr = initArray(i, candidates[candidates.length - 1]);
            return item.concat(newArr);
        });
        if(cand.length > 0) { // 不要push进空数组
            res = res.concat(cand);
        }
        i++;
    }
    res = res.concat(combinationSum(candidates.slice(candidates.length-1), target)); // 由于前面prev是空，所以要记得在最后更新concat一次
    return res;
};


// 不用自己写initArray，直接用Array(i).fill(x: number) 在本题可以。
function initArray(num, target) {
    if(!num) return [];
    let res = [];
    for(let i=0; i<num; i++) {
        res.push(target);
    }
    return res;
}