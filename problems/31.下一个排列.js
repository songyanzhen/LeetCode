/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.03%)
 * Total Accepted:    11.3K
 * Total Submissions: 37K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length;
  let start = -1;
  let end = -1;

  for (let i = len - 1; i >= 0; i -= 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (nums[i] > nums[j] && j > start) {
        start = j;
        end = i;
      }
    }
  }

  if (start > -1) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    for (let i = start + 1; i < len; i += 1) {
      for (let j = i + 1; j < len; j += 1) {
        if (nums[i] > nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
        }
      }
    }
  } else {
    nums.reverse();
  }
};
