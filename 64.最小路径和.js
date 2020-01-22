/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let line = new Array(m).fill(0);
  let matrix = [...Array(n)].map(item => line.slice(0));
  for (let p = 0; p < n; p++) {
      for (let q = 0; q < m; q++) {
          if (p > 0 && q > 0) {
              matrix[p][q] = Math.min(matrix[p - 1][q], matrix[p][q-1]) + grid[p][q];
          } else if(p === 0 && q > 0) {
              matrix[p][q] = matrix[p][q-1] + grid[p][q];
          } else if(q === 0 && p > 0) {
              matrix[p][q] = matrix[p-1][q] + grid[p][q];
          } else {
              matrix[p][q] = grid[p][q];
          }
      }
  }
  return matrix[n - 1][m - 1];
};