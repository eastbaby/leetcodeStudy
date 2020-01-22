/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) return 0;
  let p1 = 0; p2 = 0;
  let map = {};
  let tmpres = 1;
  let res  = 1;
  while(p2 < s.length) {
      if(map.hasOwnProperty(s[p2])){
          while(p1 <= map[s[p2]]) {
              delete(map[s[p1]]);
              p1 ++ ;
          }
      } else {
          tmpres = p2 - p1 + 1;
          res = tmpres > res ? tmpres : res;
      }
      map[s[p2]] = p2;
      p2 ++;
  }
  return res;
};