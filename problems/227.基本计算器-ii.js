/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// 遍历字符串 s，并用变量preSign 记录每个数字之前的运算符，对于第一个数字，其之前的运算符视为加号。每次遍历到数字末尾时，根据 \textit{preSign}preSign 来决定计算方式：

// 加号：将数字压入栈；
// 减号：将数字的相反数压入栈；
// 乘除号：计算数字与栈顶元素，并将栈顶元素替换为计算结果。

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const len = s.length;
  const stack = [];
  let sign = "+";

  let i = 0;
  while (i < len) {
    if (s[i] === " ") {
      i += 1;
    } else if (!isNaN(Number(s[i]))) {
      let num = 0;
      while (i < len && !isNaN(Number(s[i])) && s[i] !== " ") {
        num = num * 10 + Number(s[i]);
        i += 1;
      }
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(num * -1);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        stack.push(parseInt(stack.pop() / num));
      }
    } else {
      sign = s[i];
      i += 1;
    }
  }
  const res = stack.reduce((total, val) => {
    return total + val;
  }, 0);
  return res;
};
calculate("14-3/2");
// @lc code=end
