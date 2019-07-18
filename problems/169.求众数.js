/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希
var majorityElement = function(nums) {
    let obj = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        if (obj[nums[i]]) obj[nums[i]]++
        else obj[nums[i]] = 1
    }
    let max = 0, res
    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i]
            res = i
        }
    }
    return res
};

