/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let lena = a.length;
  let lenb = b.length;
  let len = Math.max(lena, lenb);
  
  let arr = [];
  let flag = 0;
  for(let i=0; i<len; i++) {
      let digitA = a[lena-1-i] ? Number(a[lena-1-i]) : 0;
      let digitB = b[lenb-1-i] ? Number(b[lenb-1-i]) : 0;
      if(digitA + digitB + flag >= 2) {
          arr.unshift(digitA + digitB + flag - 2);
          flag = 1;
      } else {
          arr.unshift(digitA + digitB + flag);
          flag = 0;
      }
  }
  if(flag) {
      arr.unshift(1);
  }
  return arr.join('');
};