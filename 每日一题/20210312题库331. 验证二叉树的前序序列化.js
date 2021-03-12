/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const stack = [];
  const arr = preorder.split(",");
  const len = arr.length;

  for (let i = 0; i < len; i += 1) {
    stack.push(arr[i]);
    while (stack[stack.length - 1] === "#" && stack[stack.length - 2] === "#") {
      if (stack[stack.length - 1] === "#" && stack[stack.length - 2] === "#") {
        stack.pop();
        stack.pop();
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
        stack.push("#");
      }
    }
  }
  return stack.every((item) => item === "#");
};

isValidSerialization("1,#,#,#,#");
// @lc code=end

// 二叉树的建立也伴随着槽位数量的变化。每当遇到一个节点时：
// 如果遇到了空节点，则要消耗一个槽位；
// 如果遇到了非空节点，则除了消耗一个槽位外，还要再补充两个槽位。
// - 栈/计数器都可以
var isValidSerialization = function (preorder) {
  const arr = preorder.split(",");
  const len = arr.length;
  let slots = 1;
  for (let i = 0; i < len; i += 1) {
    if (slots === 0) {
      return false;
    }
    slots = arr[i] === "#" ? slots - 1 : slots + 1; //  - 1 + 2
  }
  return slots === 0;
};

// 找规律解法
// 序列中：数字数量 = \#号数量 - 1数字数量=#号数量−1
// 在最后一个位置之前，数字数量 \ge \#号数量数字数量≥#号数量
// 由1和2可知，最后一个位置必为#号
