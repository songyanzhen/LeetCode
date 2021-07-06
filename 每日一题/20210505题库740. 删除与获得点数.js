/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除与获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const max = Math.max(...nums);
  // arr记录数组nums中所有相同元素之和
  const arr = new Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i += 1) {
    arr[nums[i]] += nums[i];
  }
  // dp[i]=max(dp[i−2]+nums[i],dp[i−1])
  const dp = [arr[0], Math.max(arr[0], arr[1])];
  for (let i = 2; i < arr.length; i += 1) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }
  return dp[arr.length - 1];
};
// @lc code=end
