/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if(!s) return 0;
    let count = 0;
    for(let i=s.length-1; i>=0; i--) {
        if(s[i] === ' ') {
            return count;
        } else {
            count ++;
        }
    }
    return count;
};