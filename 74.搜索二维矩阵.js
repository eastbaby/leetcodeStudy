// 本题也可以直接映射成一个拍平的标准二分法做。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length;
  if(m === 0) return false;
  let n = matrix[0].length;
  let r1 = 0, r2 = m;
  let targeti;
  while(r1<r2) {
      if(r1+1 === r2) {
          if(matrix[r1][0] <= target && matrix[r1][n-1] >= target) {
              targeti = r1;
              break;
          } else {
              return false;
          }
      }
      let mid = Math.floor((r1+r2)/2);
      if(matrix[mid][0] > target) {
          r2 = mid;
      } else if(matrix[mid-1][n-1] < target) {
          r1 = mid;
      }
  }
  let c1 = 0, c2 = n;
  while(c1<c2) {
      if(c1+1 === c2) {
          if(matrix[targeti][c1] === target) {
              return true;
          } else {
              return false;
          }
      }
      let mid = Math.floor((c1+c2)/2);
      if(matrix[targeti][mid] > target) {
          c2 = mid;
      } else if(matrix[targeti][mid] <= target) {
          c1 = mid;
      }
  }
};