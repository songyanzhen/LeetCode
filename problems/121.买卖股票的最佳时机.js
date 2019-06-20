/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            max = (prices[j]-prices[i]) > max ? prices[j]-prices[i] : max;
        }
    }
    return max;
};

