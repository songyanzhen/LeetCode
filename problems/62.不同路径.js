/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
机器人一定会走m+n-2步，即从m+n-2中挑出m-1步向下走不就行了吗？即C（（m+n-2），（m-1））

动态规划：边界只有一条路线，其余的路线为到该点左上两点的路线数量之和
*/
var uniquePaths = function(m, n) {
    let dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0)
                dp[i][j] = 1;
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    console.log(dp)
    return dp[m - 1][n - 1]
};

