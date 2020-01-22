
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return '';
    let num = strs.length;
    strs = strs.sort((str1, str2) => {
        return str1.length - str2.length;
    })
    let i = 0;
    let res = '';
    while(i < strs[0].length){
        let candidate = strs[0][i];
        if(!strs.every(str => str[i] === candidate)) {
            break;
        }
        res += candidate;
        i++;
    }
    return res;
};