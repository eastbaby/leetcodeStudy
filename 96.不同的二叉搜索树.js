// 本题还可以直接从数学公式上思考，用卡特兰公式 
// https://leetcode-cn.com/problems/unique-binary-search-trees/solution/hua-jie-suan-fa-96-bu-tong-de-er-cha-sou-suo-shu-b/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n===0) return 1;
    const memo = [1];
    const helper = (n) => {
        if(memo[n]) {
            return memo[n];
        }
        let res = 0;
        for(let i=1; i<=n ; i++) {
            let left = helper(i-1);
            let right = helper(n-i);
            res += left * right;
        }
        memo[n] = res;
        return res;
    }
    return helper(n);
};