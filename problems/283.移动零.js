/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = nums.length;
    for (let i = 0; i < count;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            count--;
        } else {
            i++
        }
    }
};
// var moveZeroes = function(nums) {
//     let zeros = []
//     nums = nums.filter(function(x) {
//         if (x == 0)
//             zeros.push(0)
//         return x != 0
//     })
//     nums = [...nums, ...zeros]
//     return nums
// };

