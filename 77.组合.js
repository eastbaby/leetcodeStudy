// 官方题解：https://leetcode-cn.com/problems/combinations/solution/zu-he-by-leetcode/ 回溯（也可以把题解的方法用循环来实现，每次要往数组里增加的数字判断好界限即可）

// 我的方法是用递归
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if(k===0) return [];
  if(k>n) return [];
  if(k === n) return [ [...Array(n)].map((item,index) => index+1) ];
  let res = [];
  for(let i=n; i>=k; i--){
      let prev = combine(i-1, k-1);
      let cur;
      if(prev.length > 0) {
          cur = prev.map(item => {
              return item.concat([i]);
          });
      } else {
          cur = [[i]];
      }
      res = res.concat(cur);
  }
  return res;
};