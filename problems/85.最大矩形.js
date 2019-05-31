/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
/*
本题有一种非常有趣的解法，就是利用84题《柱状图中最大的矩形》的解答。我们可以将m*n的矩阵视为n组柱状图，例如对于矩阵
*/
var largestRectangleArea = function(heights) {
    let stack = [], max = 0
    heights.push(0) // 最后一位为0
    for (let i = 0, len = heights.length; i < len; i++) {
        while(stack.length != 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let top = stack.pop()
            max = Math.max(heights[top] * (stack.length == 0 ? i : (i - stack[stack.length - 1] - 1)), max)
        }
        stack.push(i)
    }
    return max
};

var maximalRectangle = function(matrix) {
    if (matrix.length == 0) return 0
    let width = matrix[0].length, maxArea = 0
    maxArea = largestRectangleArea(matrix[0])
    for(let i = 1, len = matrix.length; i < len; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] =  (matrix[i][j] == 0 ? 0 : Number(matrix[i - 1][j]) + Number(matrix[i][j]))
        }
        maxArea = Math.max(largestRectangleArea(matrix[i]), maxArea)
    }
    return maxArea
};

