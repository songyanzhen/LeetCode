/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1)
        return 1;
    let sum = new Array();
    sum[0] = 0;
    sum[1] = 1;
    sum[2] = 2;
    for(let i = 3; i <= n; i++) {
        sum[i] = sum[i-1] + sum[i-2];
    }
    return sum[n];
};
