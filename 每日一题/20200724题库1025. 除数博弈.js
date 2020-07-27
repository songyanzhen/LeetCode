// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

// 示例 1：

// 输入：2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。
// 示例 2：

// 输入：3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  // return N % 2 === 0;
  const dp = [];
  dp[0] = false;
  dp[1] = false;
  dp[2] = true;

  for (let i = 3; i < N + 1; i += 1) {
    dp[i] = false;
    for (let j = 1; j <= Math.floor(i / 2); j += 1) {
      if (i % j === 0 && dp[i - j] === false) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[N];
};

// 动态规划：
// 基本思路：

// 将所有的小于等于 N 的解都找出来，基于前面的，递推后面的。

// 状态转移: 如果 i 的约数里面有存在为 False 的（即输掉的情况），则当前 i 应为 True；如果没有，则为 False。
