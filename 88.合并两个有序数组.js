/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 不是最优解
// var merge = function(nums1, m, nums2, n) {
//     if(!nums2.length) return;
//     let i=0, j=0;
//     while(i<m+j && j<n) {
//         if(nums1[i] <= nums2[j]) {
//             i++;
//         } else {
//             nums1.splice(i, 0, nums2[j]);
//             nums1.pop();
//             j++;
//         }
//     }
//     while(j < n) {
//         nums1[m+j] = nums2[j];
//         j++;
//     }
// };

// 借用空元素，试试倒序 O(m+n)
var merge = function(nums1, m, nums2, n) {
  if(!n) return;
  let i = m-1, j = n-1;
  let p = m+n-1;
  while(i>=0 && j>=0) {
      if(nums1[i] < nums2[j]) {
          nums1[p] = nums2[j];
          j--;
      } else {
          nums1[p] = nums1[i];
          i--;
      }
      p--;
  }
  while(j>=0) {
     nums1[p] = nums2[j];
     j --; 
     p --;
  }
};
