// 四个数字交换的找规律，最好i，j都保留原生的index去找规律更容易一点。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  if(n === 1) return matrix;
  for(i=0; i<Math.ceil(n/2); i++) {
      rotateCircle(i, n, matrix);
  }
};

function rotateCircle(i, n, matrix) {
  let len = n - i*2;
  if(len === 1) {
      return;
  }
  let j=0;
  let tmp;
  for(j; j<len-1; j++) {
      tmp = matrix[i][i+j];
      matrix[i][i+j] = matrix[i+len-1-j][i];
      matrix[i+len-1-j][i] = matrix[i+len-1][i+len-1-j];
      matrix[i+len-1][i+len-1-j] = matrix[i+j][i+len-1];
      matrix[i+j][i+len-1] = tmp;
  }
  return;
}