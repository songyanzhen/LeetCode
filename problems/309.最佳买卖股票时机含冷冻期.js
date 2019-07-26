/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
sell[i]表示截至第i天，最后一个操作是卖时的最大收益；
buy[i]表示截至第i天，最后一个操作是买时的最大收益；
cool[i]表示截至第i天，最后一个操作是冷冻期时的最大收益；
递推公式：
sell[i] = max(buy[i-1]+prices[i], sell[i-1]) (第一项表示第i天卖出，第二项表示第i天保留)
buy[i] = max(cool[i-1]-prices[i], buy[i-1]) （第一项表示第i天买进，第二项表示第i天没有买进）
cool[i] = sell[i - 1]
*/
var maxProfit = function(prices) {
    let len = prices.length
    if (len == 0)
        return 0
    let sell = [], buy = [], cool = []
    sell[0] = 0, cool[0] = 0
    buy[0] = -prices[0]
    for (let i = 1; i < len; i++) {
        sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1])
        buy[i] = Math.max(cool[i - 1] - prices[i], buy[i - 1])
        cool[i] = sell[i - 1]
    }
    return Math.max(sell[len - 1], cool[len - 1])
};

