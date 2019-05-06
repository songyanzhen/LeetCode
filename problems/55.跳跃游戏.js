/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //从后往前遍历数组，如果遇到的元素可以到达最后一行，则截断后边的元素。
 // 否则继续往前，如果最后剩下的元素大于1个，则可以判断为假。否则为真
var canJump = function(nums) {
    let dist = 1
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] >= dist) {
            dist = 1
        } else {
            dist++
        }
        if (i == 0 && dist > 1)
            return false
    }
    return true
};

