/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  垃圾排序
//  const len = nums.length;
//  const arr = nums.sort((a, b) => a - b);

//  let res = arr[len - 1] * arr[len - 2] * arr[len - 3];
//  if (arr[0] < 0 && arr[1] < 0) {
//    const otherRes = arr[0] * arr[1] * arr[len - 1];
//    res = Math.max(res, otherRes);
//  }
//  return res;
var maximumProduct = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max3) {
      max1 = max2;
      max2 = max3;
      max3 = nums[i];
    } else if (nums[i] > max2) {
      max1 = max2;
      max2 = nums[i];
    } else if (nums[i] > max1) {
      max1 = nums[i];
    }

    if (nums[i] < min2) {
      min1 = min2;
      min2 = nums[i];
    } else if (nums[i] < min1) {
      min1 = nums[i];
    }
  }
  return Math.max(min1 * min2 * max3, max1 * max2 * max3);
};
// @lc code=end

maximumProduct([-100, -99, 1, 2, 3]);
