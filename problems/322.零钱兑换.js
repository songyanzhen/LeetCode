/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
对于迭代解决方法，我们采用自下而上的方式进行思考。在计算 F(i) 之前，我们必须计算金额高达 ii 的所有最小计数。在每次迭代中，F(n) = min (F(n-coins[0]), F(n-coins[1])...) + 1
*/
var coinChange = function(coins, amount) {
    let dp = [], cLen = coins.length
    for (let i = 1; i <= amount; i++)
        dp[i] = amount + 1 // 无法达到的最大值
    dp[0] = 0 // 初始化dp完成
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < cLen; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};

