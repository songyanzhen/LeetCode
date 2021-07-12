/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (33.75%)
 * Total Accepted:    39.1K
 * Total Submissions: 115.9K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 时间复杂度 O(log(m + n)) 的方法暂时还不会，后续研究一波
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2];
  nums.sort((a, b) => {
    return a - b;
  });
  let len = nums.length;
  let mid;
  if (len % 2 != 0) {
    mid = nums[(nums.length - 1) / 2];
  } else {
    mid = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  }
  return mid;
};

// O(m + n)方法，找第mid小的数，Log的还是看不懂。。
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let len = len1 + len2;
  let mid = len % 2 == 0 ? len / 2 : (len - 1) / 2;
  console.log(mid);
  let left = -1,
    right = -1;
  let aStart = 0,
    bStart = 0;
  for (let i = 0; i <= mid; i++) {
    left = right;
    if (aStart < len1 && (bStart >= len2 || nums1[aStart] < nums2[bStart])) {
      right = nums1[aStart++];
    } else {
      right = nums2[bStart++];
    }
  }
  return len % 2 == 0 ? (left + right) / 2 : right;
};

var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  let left = -1;
  let right = -1;
  let aStart = 0;
  let bStart = 0;

  const mid = Math.floor(len / 2);

  for (let i = 0; i <= mid; i += 1) {
    left = right;
    // a可以移动 且 b不能移动或a当前位置数较小 则移动a。否则移动b
    if (aStart < len1 && (bStart >= len2 || nums1[aStart] < nums2[bStart])) {
      right = nums1[aStart];
      aStart += 1;
    } else {
      right = nums2[bStart];
      bStart += 1;
    }
  }

  return len % 2 === 0 ? (left + right) / 2 : right;
};
