/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  if (stones.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < stones.length; i += 1) {
    sum += stones[i];
  }

  const max = Math.floor(sum / 2);
  const dp = new Array(max + 1); // dp[i] 表示，是否有子集数组，重量和为i
  dp[0] = true;

  for (let i = 0; i < stones.length; i += 1) {
    for (let j = max; j >= stones[i]; j -= 1) {
      dp[j] = dp[j] || dp[j - stones[i]];
    }
  }

  // 从 最大值 开始，遍历dp数组，寻找最大i的值
  for (let i = max; i >= 0; i -= 1) {
    if (dp[i]) {
      return sum - 2 * i; // 根据数学推导，计算result
    }
  }
};
// @lc code=end
