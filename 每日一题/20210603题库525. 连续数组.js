/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const obj = {};
  let key = 0;

  for (let i = 0; i < nums.length; i += 1) {
    key += nums[i] === 1 ? 1 : -1;
    if (obj[key]) {
      obj[key].push(i + 1);
    } else {
      obj[key] = [i + 1];
    }
  }

  let res = obj[0] ? obj[0][obj[0].length - 1] : 0;

  Object.entries(obj).forEach(([k, arr]) => {
    if (arr.length > 1) {
      res = Math.max(res, arr[arr.length - 1] - arr[0]);
    }
  });

  return res;
};

console.log(findMaxLength([0, 1]));
// @lc code=end
