/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [num, count] of map) {
    if (count === 1) return num;
  }
};
// @lc code=end
