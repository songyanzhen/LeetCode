/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
 主要是利用逐步求解，以连续数组结束位置为每一步的解，sum其实就是记录了上一步骤的解，
 在这一步骤进行对比，如果上一步骤的解<0则舍弃。最终得到这一步骤解，与之前步骤解的最大值res进行比较，保存当前的最优解。
 */
var maxSubArray = function(nums) {
    let sum = 0
    let res = nums[0]
    for (let i = 0, len = nums.length; i < len; i++) {
        sum = sum > 0 ? sum + nums[i] : nums[i]
        if (res < sum) res = sum
    }
    return res
};

