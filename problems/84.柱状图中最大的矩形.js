/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
/*
当第i个柱子进栈时，如果栈顶柱子（此处记作柱子A）的高度低于或等于第i个柱子，则第i个柱子进栈；
如果高于第i个柱子，则出栈，并计算以柱子A为高的矩形最大面积。

高度：就是柱子A的高度
右边沿：正好是i（由于单调栈的性质，第i个柱子就是右边第一个矮于A的柱子）
左边沿：单调栈中紧邻A的柱子。（如果A已经出栈，那么左边沿就是A出栈后的栈顶）而且是该柱子的右边，所以要+1.
*/
var largestRectangleArea = function(heights) {
    let stack = [], max = 0
    heights.push(0) // 最后一位为0
    for (let i = 0, len = heights.length; i < len; i++) {
        while(stack.length != 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let top = stack.pop()
            max = Math.max(heights[top] * (stack.length == 0 ? i : (i - stack[stack.length - 1] - 1)), max)
            console.log(max)
        }
        stack.push(i)
    }
    return max
};

