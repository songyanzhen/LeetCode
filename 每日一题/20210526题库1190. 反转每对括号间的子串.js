/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== ')') {
      stack.push(s[i]);
    } else {
      const temp = [];
      let top = stack.pop();
      while (top !== '(') {
        temp.push(top);
        top = stack.pop();
      }
      stack = [...stack, ...temp];
    }
  }
  return stack.join('');
};


reverseParentheses("(u(love)i)");
// @lc code=end
