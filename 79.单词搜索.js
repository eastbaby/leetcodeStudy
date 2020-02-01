// 标准回溯法。
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let res = false;
  let m = board.length;
  if(!m || !word) return res;
  let n = board[0].length;
  let line = Array(n).fill(0);
  let pathBoard = [...Array(m)].map(item => line.slice(0));
  // backtrace 也可以直接return true/false
  const backtrace = (i, j, wordIndex) => {
      if(!res && i>=0 && i<m && j>=0 && j<n && !pathBoard[i][j] && wordIndex < word.length && board[i][j] === word[wordIndex]) {
          if(wordIndex+1 === word.length) {
              res = true;
              return;
          }
          pathBoard[i][j] = 1;
          // 标准写法是每做一次backtrace就立刻reset一下pathBoard刚才的值。
          backtrace(i+1, j, wordIndex + 1);
          backtrace(i, j+1, wordIndex + 1);
          backtrace(i-1, j, wordIndex + 1);
          backtrace(i, j-1, wordIndex + 1);
          pathBoard[i][j] = 0;
      } else {
          return;
      }
  }
  for(let i=0; i<m; i++) {
      for(let j=0; j<n; j++) {
          if(board[i][j] === word[0]) {
              backtrace(i, j, 0);
              if(res) return res;
          }
      }
  }
  return res;
};