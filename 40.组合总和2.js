/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if(target <= 0) return [];
  if(candidates.length === 1) {
      if(candidates[0] === target) {
          return [ [target] ];
      } else {
          return [];
      }
  }
  candidates.sort((a,b) => a-b);
  let prev1 = combinationSum2(candidates.slice(0, candidates.length -1), target);
  let prev2 = combinationSum2(candidates.slice(0, candidates.length -1), target - candidates[candidates.length - 1]);
  let res = [];
  res = res.concat(prev1);
  if(prev2.length > 0) {
      let res2 = prev2.map(item => {
          item.push(candidates[candidates.length - 1]);
          return item;
      });
      res = res.concat(res2);
  }
  if(candidates[candidates.length - 1] === target) {
      res = res.concat([[target]]);
  }
  // 去重
  let resStr = res.map(item => item.join(','));
  resStr = [ ...new Set(resStr)];
  res = resStr.map(item => item.split(','));
  return res;
};