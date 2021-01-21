/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const res = new Array(num1.length + num2.length - 1).fill(0);

  for (let i = 0; i < num1.length; i += 1) {
    for (let j = 0; j < num2.length; j += 1) {
      res[i + j] += Number(num1[i]) * Number(num2[j]);
    }
  }

  let index = res.length - 1;

  while (index > 0) {
    const cur = res[index];
    res[index] = cur % 10;
    res[index - 1] += Math.floor(cur / 10);
    index -= 1;
  }
  return res.join("");
};
// @lc code=end

console.log(multiply("9999", "0"));
