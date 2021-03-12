/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let num1 = A.join("");
  let num2 = String(K);

  let i = num1.length - 1;
  let j = num2.length - 1;
  let beyond = 0;
  let res = [];

  while (i >= 0 || j >= 0) {
    let n1 = Number(num1[i]) || 0;
    let n2 = Number(num2[j]) || 0;
    let temp = n1 + n2 + beyond;
    beyond = Math.floor(temp / 10);
    res.unshift(temp % 10);
    i -= 1;
    j -= 1;
  }

  if (beyond > 0) {
    res.unshift(beyond);
  }

  return res;
};
// @lc code=end
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1));
