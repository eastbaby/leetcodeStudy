// O(n). 记得先排序，思考问题的核心。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 0) {
      return [];
  }
  intervals.sort((a,b) => a[0] - b[0]);
  let res = [intervals[0]];
  for(let i=1; i<intervals.length; i++) {
      if(intervals[i][0] > res[res.length-1][1]) {
          res = res.concat([intervals[i]]);
      }
      else {
          let last = res[res.length-1];
          let newRange = [last[0], Math.max(last[1],intervals[i][1])];
          res.splice(res.length-1, 1, newRange); // 不做splice，而是遇到新增区间再push上一个区间也可以
      }
  }
  return res;

};