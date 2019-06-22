/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
// 由于有负数的存在，应同时维护最大值和最小值
// max = max(max*nums[i], nums[i]) min同理
var maxProduct = function(nums) {
    let max = 1, min = 1, res = -9999999 // 记录最大值
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] < 0) // 若当前为负数，则最大值最小值互换
            [max, min] = [min, max]
        max = Math.max(max * nums[i], nums[i])
        min = Math.min(min * nums[i], nums[i])
        res = Math.max(res, max)
    }
    return res
};

/*
标签：动态规划
遍历数组时计算当前最大值，不断更新
令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
由于存在负数，那么会导致最大的变最小的，最小的变最大的。
因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
当负数出现时则imax与imin进行交换再进行下一步计算
*/


