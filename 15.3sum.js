// 只要排了序，就可以用双指针逼近 O(n)
// 去重逻辑很麻烦。注意[1,2,3] === [1,2,3] false。不能用includes去重。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    const sortNums = nums.sort((a,b) => a-b);
    const res = [];
    let p,q;
    for(let i=0; i<sortNums.length-2; i++){
        if(i>0 && sortNums[i] === sortNums[i-1]) {
            continue;
        }
        let first = sortNums[i];
        let twosum = -first;
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