/**
 * @param {string} path
 * @return {string}
 */

// 本题关键是 1. split； 2. 想到..可以直接delete.
var simplifyPath = function(path) {
  let stack = [];
  let arr = path.split('/');
  for(let i=0; i<arr.length; i++) {
      if(arr[i] === '..' && stack.length > 0) {
          stack.pop();
      } else if(arr[i] && arr[i] !== '.' && arr[i] !== '..') {
          stack.push(arr[i]);
      }
  }
  return '/' + stack.join('/');
}

// 第一版方法
var simplifyPath = function(path) {
    let arr = [''];
    let curLevel = 0;
    path = path.replace(/(\/)+/g, '/');
    if(path[0] === '/') {
        path = path.slice(1);
    }
    let p = 0;
    let symb = '';
    while(p<path.length) {
        if(path[p] === '/') {
            symb +='/';
            if(symb === './' || symb === '/'|| (symb === '../' && curLevel === 0)) {
                // do nothing
            } else if(symb === '../' && curLevel > 0) {
                curLevel --;
            } else {
                curLevel++;
                arr[curLevel] = symb.slice(0, -1);
            }
            symb = '';
        } else {
            symb += path[p];
        }
        p ++;
    }
    if(symb && symb !== '.' && symb !== '..') {
        curLevel ++;
        arr[curLevel] = symb;
    } else if(symb === '..' && curLevel > 0) {
        curLevel --;
    }
    if(curLevel === 0) return '/';
    let res = '';
    for(let i=1; i<=curLevel; i++) {
        let tmp = '/' + arr[i];
        res += tmp;
    }
    return res;
};