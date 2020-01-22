// 本方法没有用额外空间。如果写的优雅一点，可以用一个同matrix空间记录是否走过。这样每次前进方向都是唯一的，最后无路可走就会停下。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length < 1)  return [];
    let m = matrix.length;
    let n = matrix[0].length;
    let minN = Math.min(m,n);
    let K = Math.ceil(minN/2);
    let res = [];
    let pm = 0, pn = 0;
    for(let i=0; i<K; i++) {
        while(pm>=i && pm<=m-1-i && pn>=i && pn<=n-1-i) {
            if(res.length < m*n) { // !!! 这一个判读可以避免最内圈的边界处理
                res.push(matrix[pm][pn]);
            } else {
                break;
            }
            if(n-1-i>i && pm === i+1 && pn === i) {
                pn ++;
                break;
            }
            if(pm === i && pn < n-1-i) {
                pn ++;
            } else if(pn === n-1-i && pm < m-1-i) {
                pm ++;
            } else if(pm === m-1-i && pn > i) {
                pn --;
            } else {
                pm --;
            }
        }
    }
    return res;
};
