/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  strs.forEach(item => {
      let key = item.split('').sort().join('');
      if(!map[key]) {
          map[key] = [item];
      } else {
          map[key].push(item);
      }
  });
  let res = [];
  for(let key in map) {
      res.push(map[key]);
  }
  return res;
};