/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const numbers = "0123456789";

var myAtoi = function (s) {
  let index = -1;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== " ") {
      index = i;
      break;
    }
  }

  if (
    index === -1 ||
    (s[index] !== "-" && s[index] !== "+" && !numbers.includes(s[index]))
  ) {
    return 0;
  }

  let isNegative = false;
  if (s[index] === "-") {
    isNegative = true;
    index += 1;
  } else if (s[index] === "+") {
    index += 1;
  }

  let res = 0;

  while (index < s.length && numbers.includes(s[index])) {
    res = res * 10 + Number(s[index]);
    if (res > 2147483647) {
      return isNegative ? -2147483648 : 2147483647;
    }
    index += 1;
  }

  return isNegative ? res * -1 : res;
};
// @lc code=end
