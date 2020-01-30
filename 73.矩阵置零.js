// 本题还有一种解法不需要额外空间。（借用矩阵的第一行和第一列记录是否该行/列要置零）

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let p = 0, q = 0;
  for(p=0; p<m; p++) {
      for(q=0; q<n; q++) {
          if(matrix[p][q] === 0) {
              for(let u=0; u<m; u++) {
                  matrix[u][q] = matrix[u][q] === 0 ? 0 : null;
              }
              for(let v=0; v<n; v++) {
                  matrix[p][v] = matrix[p][v] === 0 ? 0 : null;
              }
          }
      }
  }
  p = 0, q = 0;
  for(p=0; p<m; p++) {
      for(q=0; q<n; q++) {
          if(matrix[p][q] === null) {
              matrix[p][q] = 0;
          }
      }
  }
};