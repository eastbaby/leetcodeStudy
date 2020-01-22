/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;
  let line = new Array(m).fill(0);
  let matrix = [...Array(n)].map(item => line.slice(0));
  if (!obstacleGrid[0][0]) {
      matrix[0][0] = 1;
  }
  for (let p = 0; p < n; p++) {
      for (let q = 0; q < m; q++) {
          if (obstacleGrid[p][q]) {
             continue;
          } else {
              if (p > 0) {
                  matrix[p][q] += matrix[p - 1][q];
              }
              if (q > 0) {
                  matrix[p][q] += matrix[p][q - 1];
              }
          }
      }
  }
  return matrix[n - 1][m - 1];
};