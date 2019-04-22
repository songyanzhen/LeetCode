/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (35.74%)
 * Total Accepted:    21.7K
 * Total Submissions: 59.7K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1
    let l = 0, r = nums.length - 1, m;
    if (nums[r] < nums[l]) {
        while (r - l > 1) {
            m = Math.floor((r + l) / 2)
            if (nums[m] > nums[l]) l = m
            if (nums[m] < nums[r]) r = m
        } // [0, l],[r, len - 1] 分别有序 logn
        if (target < nums[0]) { // 在右半区查找
            l = r
            r = nums.length - 1
        } else { // 在左半区查找
            r = l
            l = 0
        }
    }
    while (l <= r) { // 二分查找其中一个半区
        m = Math.floor((l + r) / 2)
        if (target === nums[m]) return m
        else if (target < nums[m]) r = m - 1
        else l = m + 1
    }
    return -1
};
