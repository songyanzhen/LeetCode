/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0;
  const len = nums.length;
  const arr = [0];

  if (nums.length < 2) {
    return false;
  }

  for (let i = 0; i < len; i += 1) {
    sum += nums[i];
    const mod = sum % k;
    const index = arr.findIndex((item) => item === mod);
    if (index > -1 && i + 1 - index > 1) {
      return true;
    } else {
      arr.push(mod);
    }
  }

  return false;
};
// @lc code=end

// console.log(checkSubarraySum([0], 1));
// console.log(checkSubarraySum([1, 2, 12], 6));
// console.log(checkSubarraySum([1, 0], 2));
console.log(checkSubarraySum([1, 1, 1], 1));
