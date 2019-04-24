/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// 找到最大值后，从两边向中间遍历
var trap = function(height) {
    let res = 0
    let max = 0, maxP = 0, len = height.length // 最大值及最大值位置
    for (let i = 0; i < len; i++) {
        if (height[i] > max) {
            max = height[i]
            maxP = i
        }
    }
    let l = height[0], r = height[len - 1] // 遍历时两边最大的高度，若下一个比当前低，则加（l - height[i]），否则替换最大高度
    for (let i = 1; i < maxP; i++) {
        if (height[i] < l) {
            res += (l - height[i])
        } else {
            l = height[i]
        }
    }
    for (let i = len - 2; i > maxP; i--) {
        if (height[i] < r) {
            res += (r - height[i])
        } else {
            r = height[i]
        }
    }
    return res
};

