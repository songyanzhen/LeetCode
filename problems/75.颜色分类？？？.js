/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 思路：一次遍历，如果为0则放到数组开头，如果为2则放到数组末尾
 * 但是他妈为啥提交之后改不了原数组鸭，一样的测试用例都是好使的
 */
var sortColors = function(nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.unshift(0)
        } else if (nums[i] == 2) {
            nums.splice(i, 1)
            nums.push(2)
        }
    }
};

