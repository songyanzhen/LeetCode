/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字。
nb没出现过的数的下标仍为正数
时间复杂度O(2n)，空间复杂度 $O(1)$，res 不算额外空间
*/
var findDisappearedNumbers = function(nums) {
    let len = nums.length, res = []
    for (let i = 0; i < len; i++) {
        let index = Math.abs(nums[i]) - 1
        nums[index] = -Math.abs(nums[index])
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) 
            res.push(i + 1)
    }
    return res
};

