/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let tmp = 0;
    let i = 0, j = height.length -1;
    while(i<j) {
        tmp = Math.min(height[i], height[j]) * (j-i);
        res = tmp > res ? tmp : res;
        if(height[i] < height[j]) {
            i ++ ;
        } else {
            j --;
        }
    }
    return res;
};