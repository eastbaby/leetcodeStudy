// 普通方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length < 2) {
      return [];
  }
  const sortedNums = nums.map((item, index) => [item, index]).sort((x, y) => {
      return x[0] - y[0];
  })
  let i = 0; j = sortedNums.length - 1;
  while(i<j) {
      if(sortedNums[i][0] + sortedNums[j][0]  === target) {
          return [sortedNums[i][1], sortedNums[j][1]];
      }
      if(sortedNums[i][0] + sortedNums[j][0]  > target) {
          j --;
          continue;
      }
      if(sortedNums[i][0] + sortedNums[j][0]  < target) {
          i ++;
          continue;
      }
  }
  return [];
};

// better方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = [];
  const mapObj = nums.reduce((obj, item, index) => {
      if(obj.hasOwnProperty(item) && item * 2 === target ) {
          res = [obj[item], index];
      } else {
          obj[item] = index;  
      }
      return obj;
  }, {});

  if(res.length > 0) {
      return res;
  }

  for(key in mapObj) {
      if(mapObj.hasOwnProperty(target-key)) {
          return [mapObj[key], mapObj[target-key]];
      }
  }
  return [];
};