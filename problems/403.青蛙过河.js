/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
// 动态规划：dp[i][k] 表示青蛙能否达到「现在所处的石子编号」为 i 且「上一次跳跃距离」为 k 的状态。
var canCross = function (stones) {
  const steps = []; // steps表示跳到第i块石头需要几步，可能是个数组
  const len = stones.length;

  steps[0] = [0];
  steps[1] = [1];

  if (stones[1] !== 1) {
    return false;
  }

  for (let i = 2; i < len; i += 1) {
    steps[i] = [];
    for (let j = 1; j < i; j += 1) {
      const curSteps = steps[j];
      const distance = stones[i] - stones[j];
      for (let k = 0; k < curSteps.length; k += 1) {
        const step = curSteps[k];
        if (step === distance) {
          steps[i].push(step);
        } else if (step + 1 === distance) {
          steps[i].push(step + 1);
        } else if (step - 1 === distance) {
          steps[i].push(step - 1);
        }
      }
      // 去重
      steps[i] = [...new Set(steps[i])];
    }
  }
  return steps[len - 1].length;
};

canCross([0, 1, 2, 3, 4, 8, 9, 11]);
// @lc code=end
