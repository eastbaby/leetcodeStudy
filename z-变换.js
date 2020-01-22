/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1) return s;
    const arrList = new Array(numRows).fill('');
    for(i=0; i<s.length; i++) {
        if(i % (2*numRows-2) < numRows-1) {
            arrList[(i % (2*numRows-2))] += s[i];
        } else {
            arrList[2*numRows-2 - i % (2*numRows-2)] += s[i];
        }
    }
    return arrList.join('');
};