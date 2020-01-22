/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let line = new Array(m).fill(1);
  let matrix = [...Array(n)].map(item => line.slice(0));
  for(let p=1; p<n; p++) {
      for(let q=1; q<m; q++) {
          matrix[p][q] = matrix[p-1][q] + matrix[p][q-1];
      }
  }
  return matrix[n-1][m-1];
};