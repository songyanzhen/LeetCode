/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
我们用 0 初始化另一个矩阵 dp，维数和原始矩阵维数相同；
dp(i,j) 表示的是由 1 组成的最大正方形的边长；
从 (0,0)(0,0) 开始，对原始矩阵中的每一个 1，
我们将当前元素的值更新为
dp(i, j)=min(dp(i−1, j), dp(i−1, j−1), dp(i, j−1))+1

我们还用一个变量记录当前出现的最大边长，这样遍历一次，
找到最大的正方形边长 maxsqlenmaxsqlen，那么结果就是 maxsqlen^2
*/
var maximalSquare = function(matrix) {
    let dp = [], max = 0
    if (matrix.length == 0)
        return 0
    let iLen = matrix.length, jLen = matrix[0].length
    for (let i = 0; i <= iLen; i++) {
        dp[i] = []
        for (let j = 0; j <= jLen; j++) {
            dp[i][j] = 0
        }
    }
    for (let i = 1; i <= iLen; i++) {
        for (let j = 1; j <= jLen; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                max = Math.max(max, dp[i][j])
            }       
        }
    }
    return max * max
};

