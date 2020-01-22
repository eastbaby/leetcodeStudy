// 用fill arr会出错，变成同一个内存地址！！！！！！

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // row
    const rowIsValid = board.every((item) => validInTen(item));
    if(!rowIsValid) return false;
    // colomn
    let colomnNums = [];
    for(let i=0; i<9; i++) {
        let nums = board.map(item => item[i]);
        colomnNums.push(nums);
    }
    const columnIsValid = colomnNums.every((item) => validInTen(item));
    if(!columnIsValid) return false;
    // ninecube
    let cubeNums = [ [], [], [], [], [], [], [], [], [] ]; // 用fill arr会出错，变成同一个内存地址！！！！！！
    for(let i=0; i<9; i++) {
        for(let j = 0; j<9; j++) {
            let a = Math.floor(i/3);
            let b = Math.floor(j/3);
            cubeNums[b*3 + a].push(board[j][i]);
        }
    }
    const cubeIsValid = cubeNums.every((item) => validInTen(item));
    if(!cubeIsValid) return false;
    return true;
};

function validInTen(nums) {
    let filterNums = nums.filter(item => item !== '.');
    let obj = {
        '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0,
    };
    for(let i=0; i<filterNums.length; i++) {
        let num = filterNums[i];
        if(obj[num] === 0) {
            obj[num] = 1;
        } else {
            return false;
        }
    }
    return true;
}
