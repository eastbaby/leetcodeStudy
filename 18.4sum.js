var threeSum = function(sortNums, target) {
    const res = [];
    let p,q;
    for(let i=0; i<sortNums.length-2; i++){
        if(i>0 && sortNums[i] === sortNums[i-1]) {
            continue;
        }
        let first = sortNums[i];
        let twosum = target-first;
        p = i+1;
        q = sortNums.length - 1;
        while(p < q) {
            if(sortNums[p] + sortNums[q] > twosum) {
                q --;
            } else if (sortNums[p] + sortNums[q] < twosum) {
                p ++;
            } else {
                let candidate = [first, sortNums[p], sortNums[q]];
                res.push(candidate);
                while(p<q && sortNums[p+1] === sortNums[p]) {
                    p++;
                }
                while(p<q && sortNums[q-1] === sortNums[q]) {
                    q--;
                }
                p++;
                q--;
            }
        }
    }
    return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const sortNums = nums.sort((a,b) => a-b);
    if(sortNums.length < 4) return [];
    let res = [];
    for(let i=0; i<sortNums.length-3; i++) {
        if(i>0 && sortNums[i] === sortNums[i-1]) {
            continue;
        }
        let threeArr = threeSum(sortNums.slice(i+1), target-sortNums[i]);
        if(threeArr.length > 0) {
            res = res.concat(threeArr.map(item => {
                let four = [sortNums[i], ...item];
                return four;
            }));
        }
    }
    return res;
};