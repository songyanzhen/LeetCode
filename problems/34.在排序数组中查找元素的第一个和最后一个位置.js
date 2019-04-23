/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
    分别用二分查找找到target的第一位和最后一位，注意判断nums[m]和target相等的情况
    当nums[m] === target时，要判断他的前（后）一位是否也等于target，
    若不相等，则m为边界值
    否则，将右或者左边界移动至前（后）一位
*/
var searchRange = function(nums, target) {
    let arr = [-1, -1]
    let l = 0, r = nums.length - 1, m
    while (l <= r) { // 求最后一位位置
        m = Math.floor((l + r) / 2)
        if (nums[m] < target) l = m + 1
        else if (nums[m] === target) {
            arr[1] = m
            if (nums[m + 1] === target) l = m + 1
            else break
        }
        else r = m - 1
    }
    
    l = 0, r = nums.length - 1
    while (l <= r) { // 求第一位位置
        m = Math.floor((l + r) / 2)
        if (nums[m] > target) r = m - 1
        else if (nums[m] === target) {
            arr[0] = m
            if (nums[m - 1] === target) r = m - 1
            else break
        }
        else l = m + 1
    }
    return arr
};
