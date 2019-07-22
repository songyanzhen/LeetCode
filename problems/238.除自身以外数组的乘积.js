/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
乘积 = 当前数左边的乘积 * 当前数右边的乘积
*/
var productExceptSelf = function(nums) {
    let res = []
    let s = 1, len = nums.length
    for (let i = 0; i < len; i++) {
        res[i] = s // s为左面数的乘积, res[0] = 1, res[1] = nums[0]...
        s = s * nums[i]
    }
    s = 1
    for (let i = len - 1; i >= 0; i--) {
        res[i] *= s // s为右面数的乘积 res[len - 1] = left * 1, res[len - 2] = left * res[len - 1]
        s = s * nums[i]
    }
    console.log(res)
    return res
};

