/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
 /**
 * sum(P) 前面符号为+的集合；sum(N) 前面符号为减号的集合
 * 所以题目可以转化为
 * sum(P) - sum(N) = target 
 * => sum(nums) + sum(P) - sum(N) = target + sum(nums)
 * => 2 * sum(P) = target + sum(nums) 
 * => sum(P) = (target + sum(nums)) / 2
 * 因此题目转化为01背包，也就是能组合成容量为sum(P)的方式有多少种
 */
var findTargetSumWays = function(nums, S) {
  let sum = 0
  sum = nums.reduce((sum, num) => sum += num)
  if (sum < S || (sum + S) % 2 != 0)
      return 0
  let p = (sum + S) / 2
  let dp = [] // dp[x]表示sumP = x有几种方法
  for (let i = 1; i <= p; i++)
      dp[i] = 0
  dp[0] = 1
  for (let i = 0, len = nums.length; i < len; i++) {
      for (let j = p; j >= nums[i]; j--)
          dp[j] += dp[j - nums[i]]
  }
  return dp[p]
};

