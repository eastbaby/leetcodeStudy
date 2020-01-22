// 本方法用从1开始的计数算公式，比较麻烦。最好用计算机计数法计算(start_index=0)。另外，寻找第index大的数的时候可以通过空间存储挨个找，写起来简单一点。

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const factorial = (function (){
  var arr = [1, 1, 2];
  return function (n) {
      var res = arr[n]; // 因为内部引用了arr，并返回，导致arr一直在内存中
      if (res) {
          return res;
      } else {
          arr[n] = n * factorial(n-1);
          return arr[n];
      }
  }
})();

var getPermutation = function(n, k) {
  let res = '';
  if(n === 1) return '1';
  let map = {};
  for(let i=0; i<n; i++) {
      let index;
      if(i === n-1) {
          index = 1;
      } else {
          index = Math.ceil(((k % factorial(n-i)) || factorial(n-i))/factorial(n-i-1));
      }
      let curStr = findCurStr(map, n, index);
      res += `${curStr}`;
      map[curStr] = 1;
  }
  return res;
};

function findCurStr(map, n, index) {
  let i = 0;
  let count = 0;
  while(true) {
      i++;
      if(i in map) {
          continue;
      }
      count ++;
      if(count === index) {
          return i;
      }
  }
}