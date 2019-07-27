/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */
/**
 * @param {number} num
 * @return {number[]}
 */

/*
    P(x+b) = P(x) + 1, b=2^m>x
    0-1-2,3-4,5,6,7-8,9,10...
    1 2 4 8...
*/
var countBits = function(num) {
    let res = [], b = 1, i = 0
    res[0] = 0
    while (b <= num) {
        // generate [b, 2b) or [b, num) from [0, b)
        while (i < b && i + b <= num) {
           res[i + b] = res[i] + 1
            i++ 
        }
        i = 0
        b *= 2
    }
    return res
};

