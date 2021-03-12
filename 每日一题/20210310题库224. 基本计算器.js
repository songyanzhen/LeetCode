/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const len = s.length;
  const stack = [1];
  let sign = 1;
  let res = 0;

  let i = 0;
  while (i < len) {
    if (s[i] === " ") {
      i += 1;
    } else if (s[i] === "+") {
      sign = stack[stack.length - 1];
      i += 1;
    } else if (s[i] === "-") {
      sign = -stack[stack.length - 1];
      i += 1;
    } else if (s[i] === "(") {
      stack.push(sign);
      i += 1;
    } else if (s[i] === ")") {
      stack.pop();
      i += 1;
    } else if (!isNaN(Number(s[i]))) {
      let num = 0;
      while (i < len && !isNaN(Number(s[i])) && s[i] !== " ") {
        num = num * 10 + Number(s[i]);
        i += 1;
      }
      res += sign * num;
    }
  }
  return res;
};

calculate(" 2-1 + 2 ");
// @lc code=end
