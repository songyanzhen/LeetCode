/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 全部异或，最后的结果即为不重复的数字
var singleNumber = function(nums) {
    let res = nums[0]
    for (let i = 1, len = nums.length; i < len; i++) {
        res = res ^ nums[i]
    }
    return res
};

