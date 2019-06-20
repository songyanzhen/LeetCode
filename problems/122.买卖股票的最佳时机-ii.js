/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let x = 0;
    let flag = 0;
    let len = prices.length;
    
    if(prices[1] >= prices[0]) {
        x = prices[0];
        flag = 1;
    }
    for(let i = 1; i < len; i++) {
        let left = prices[i - 1];
        let right = prices[i + 1];
        let mid = prices[i];
        if(flag) {
            if((left <= mid)&&(right <= mid)) {
                sum += (mid - x);
                flag = 0;
            } else if((i == len - 1)&&(left <= mid))
                sum += (mid - x);
        } else {
            if((left >= mid)&&(right >= mid)) {
                x = mid;
                flag = 1;
            }
        }
    }
    return sum;
};

