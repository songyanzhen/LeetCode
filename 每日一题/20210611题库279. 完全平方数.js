/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */
/**
 * @param {number} n
 * @return {number}
 */
/*
动态规划 状态转移方程如下： dp[i] = Math.min(min, dp[j * j] + dp [i - j * j])
*/
var numSquares = function(n) {
    let dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        let min = Number.MAX_VALUE
        for (let j = 1; j * j <= i; j++) {
            if (j * j == i) {
                min = 1
                break
            }
            min = Math.min(min, dp[j * j] + dp [i - j * j]) // 最小值的结果中一定有一个是最小平方数
        }
        dp[i] = min
    }
    return dp[n]
};


// var numSquares = function(n) {
//     const dp = [];
//     dp[0] = 0;
//     dp[1] = 1;
//     for (let i = 2; i <= n; i += 1) {
//         dp[i] = Infinity;
//         for (let j = 1; j * j <= i; j += 1) {
//             if (j * j === i) {
//                 dp[i] = 1;
//                 break;
//             } else {
//                 dp[i] = Math.min(dp[i], dp[j * j] + dp[i - j * j]);
//             }
//         }
//     }
//     return dp[n];
// };