/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (53.48%)
 * Total Accepted:    39.2K
 * Total Submissions: 71.4K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
// 两个头尾指针，获取二者之间面积，然后移动较短一方的指针，再获取面积，直到指针相遇
var maxArea = function(height) {
    let i = 0, j = height.length - 1; // 指向开头和尾部的指针
    let max = 0;
    while (i < j) {
        max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
        height[j] > height[i] ? i++ : j--; // 移动较短的一边指针
    }
    return max;
};

