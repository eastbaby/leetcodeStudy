/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let line = Array(n).fill(0);
  let matrix = [...Array(n)].map(item => line.slice());
  let direction = 1; // 1-right; 2-down; 3-left; 4-up
  let i = 0, j = 0;
  for(let cur = 1; cur < n*n; cur++) {
      matrix[i][j] = cur;
      let next = nextPosition(i, j, direction);
      if(next[0] >= n || next[0] < 0 || next[1] >= n || next[1] < 0 || matrix[next[0]][next[1]] !== 0) {
          direction = changeDirection(direction);
          next = nextPosition(i, j, direction);
      }
      i = next[0];
      j = next[1];
  }
  matrix[i][j] = n * n;
  return matrix;
};

function changeDirection(direction) {
  if(direction < 4) {
      return direction + 1;
  } else {
      return 1;
  }
}

function nextPosition(i, j, direction) {
  if(direction === 1) {
      return [ i, j+1 ];
  }
  if(direction === 2) {
      return [ i+1, j ];
  }
  if(direction === 3) {
      return [ i, j-1 ];
  }
  if(direction === 4) {
      return [ i-1, j ];
  }
}