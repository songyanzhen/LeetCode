/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let flag = false
  function dfs (node) { // 遍历s，判断每个树是否与t相等
      if (node !== null) {
          if (judgeTree(node, t)) {
              flag = true
          }
          dfs(node.left)
          dfs(node.right)
      }
  }
  function judgeTree (a, b) { // 判断两个树是否相等
      if (a == null && b == null)
          return true
      else if (a == null || b == null)
          return false
      return (a.val == b.val) && judgeTree(a.left, b.left) && judgeTree(a.right, b.right)
  }
  dfs(s)
  return flag
};

