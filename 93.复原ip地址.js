/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if(!s) return [];
  const helper = (s, num) => {
      // 在num===0的时候做边界更清晰。
      if(num===1) {
          if(verify(s)) {
              return [ s ];
          }
          return [];
      }
      let i = 1;
      let res = [];
      while(i < s.length) {
          let cur = s.slice(0, i);
          if(!verify(cur)) {
              break;
          }
          let prev = helper(s.slice(i), num-1);
          if(prev.length > 0) {
              let tmp = prev.map(item => {
                  return `${cur}.${item}`;
              });
              res = res.concat(tmp);
          }
          i++;
      }
      return res;
  };
  const res = helper(s, 4);
  return res;
};

// 每次递归的时候只判断首位是不是0也可以。
function verify(s) {
  if(!s) return false;
  if(parseInt(s).toFixed(0) !== s) {
      return false;
  }
  return parseInt(s) <= 255;
}