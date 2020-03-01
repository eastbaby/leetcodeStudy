/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n===0) return [];
  let init = [...Array(n)].map((x,index) => index+1);
  return helper(init);
};

function helper(nums) {
  let n = nums.length;
  if(n==0) {
      return [ null ];
  }
  let res = [];
  for(let i=0; i<n; i++) {
      let leftRes = helper(nums.slice(0, i));
      let rightRes = helper(nums.slice(i+1));
      for(let m=0; m<leftRes.length; m++) {
          for(let n=0; n<rightRes.length; n++) {
              let root = new TreeNode(nums[i]);
              root.left = leftRes[m];
              root.right = rightRes[n];
              res.push(root);
          }
      }
  }
  return res;
}

// 搜索树：所有左 < cur < 所有右