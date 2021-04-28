/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const sortedNums = nums.sort(
    (a, b) => Number(String(b) + String(a)) - Number(String(a) + String(b))
  );
  if (sortedNums[0] === 0) {
    return "0";
  }
  return sortedNums.join("");
};

largestNumber([3, 30, 34, 5, 9]);
// @lc code=end
