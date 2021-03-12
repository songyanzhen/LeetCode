/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  let res = 0;

  for (let i = 0; i < customers.length; i += 1) {
    if (!grumpy[i]) {
      res += customers[i];
      customers[i] = 0;
    }
  }

  let temp = 0;
  for (let i = 0; i < X; i += 1) {
    temp += customers[i];
  }

  let max = temp;

  for (let i = X; i < customers.length; i += 1) {
    temp = temp - customers[i - X] + customers[i];
    max = Math.max(max, temp);
  }
  return res + max;
};

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3);
// @lc code=end
