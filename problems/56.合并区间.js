/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length)
        return []
    
    let res = [];
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let start = intervals[0][0], end = intervals[0][1]
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i][0] <= end) {
            end = intervals[i][1] > end ? intervals[i][1] : end
        } else {
            res.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
        }
    }
    res.push([start, end])
    return res
};

