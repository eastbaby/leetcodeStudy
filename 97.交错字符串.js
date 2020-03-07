/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 【本题hard】用回溯法做这种类似情况特别多的复杂度，一定要用cache防止timeout
// 另外还有一种思路是做动态规划，见官方题解
var isInterleave = function(s1, s2, s3) {
    const map = {};
    const helper = (s1, s2, s3) => {
        let key = s1 + '|' + s2 + '|' + s3;
        if(map.hasOwnProperty(key)) {
            return map[key];
        }
        if(s3 === '') {
            return !s1 && !s2;
        }
        if(s3[0] !== s1[0] && s3[0] !== s2[0]) {
            return false;
        }
        let res1 = false, res2 = false;
        if(s3[0] === s1[0]) {
            res1 = helper(s1.slice(1), s2, s3.slice(1));
        }
        if(!res1 && s3[0] === s2[0]) {
            res2 = helper(s1, s2.slice(1), s3.slice(1));
        }
        map[key] = res1 || res2
        return res1 || res2;
    };
    return helper(s1, s2, s3);
}