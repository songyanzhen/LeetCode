/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// dp[n] = MAX( dp[n-1], dp[n-2] + num )
var rob = function(nums) {
    let len = nums.length
    if (len == 0)
        return 0
    else {
        let dp = []
        dp[0] = 0, dp[1] = nums[0]
        for (let i = 1; i < len; i++) {
            dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
        }
        return dp[len]
    }
};

