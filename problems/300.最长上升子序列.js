/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length
    if (len == 0)
        return 0
    let dp = []
    dp[0] = 1
    let max = 1
    for (let i = 1; i < len; i++) {
        let maxval = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // dp[i] = max(dp[j]) + 1
                maxval = Math.max(maxval, dp[j])
            }
        }
        dp[i] = maxval + 1
        max = Math.max(max, dp[i])
    }
    return max
};

