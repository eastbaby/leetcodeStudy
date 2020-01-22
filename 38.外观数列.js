/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) {
        return '1';
    }
    if(n === 2) {
        return '11';
    }
    let prev = countAndSay(n-1);
    let res = '';
    let curCount = 1;
    let curNum = prev[0];
    for(let i=1; i<prev.length; i++) {
        if(prev[i] !== curNum) {
            res += `${curCount}${curNum}`;
            curCount = 1;
            curNum = prev[i];
        } else {
            curCount ++;
        }
    }
    res += `${curCount}${curNum}`; // 记得最后的时候要再更新一次
    return res;
};