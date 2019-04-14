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
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    nums.sort((a, b) => {return a - b});
    let len = nums.length;
    let mid;
    if (len % 2 != 0) {
        mid = nums[(nums.length - 1) / 2];
    } else {
        mid = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
    }
    return mid;
};

