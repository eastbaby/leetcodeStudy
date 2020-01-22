function midNum(arr) {
  if(arr.length % 2) {
      return arr[Math.floor(arr.length / 2)];
  }
  return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2;
}

// 找第k小的数
function helper(m, n, k) {
  //console.log(m, n, k);
  if(m.length > n.length) {
      [m, n] = [n, m];
  }
  if(m.length < 1) {
      return n[k];
  }
  if(m.length === 1) {
      if (k === 0) {
          return Math.min(m[0], n[0])
      }
      if (k === m.length + n.length - 1) {
          return Math.max(m[0], n[n.length - 1])
      }

      let candidate = n[k];
      if(m[0] > candidate) {
          return candidate;
      } else {
          return Math.max(n[k-1], m[0]);
      }
  }

  if(k < Math.floor((m.length + n.length)/2)) {
      if(midNum(m) <= midNum(n)) {
          return helper(m, n.slice(0, Math.floor(n.length/2)), k);
      } else {
          return helper(m.slice(0, Math.floor(m.length/2)), n, k);
      }
  } else {
      if(midNum(m) <= midNum(n)) {
          return helper(m.slice(Math.floor(m.length/2), m.length), n, k - Math.floor(m.length/2));
      } else {
          return helper(m, n.slice(Math.floor(n.length/2, n.length)), k - Math.floor(n.length/2));
      }
  }
}

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = (nums1.length + nums2.length);
  if(totalLen % 2) {
      return helper(nums1, nums2, Math.floor(totalLen/2));
     
  }
  return (helper(nums1, nums2, Math.floor(totalLen/2 - 1)) + helper(nums1, nums2, Math.floor(totalLen/2))) / 2;
};

