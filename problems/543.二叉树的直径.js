/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 最长的直径肯定是以某个结点为根节点的子树的左右子树高度之和。只需要深搜遍历即可。
var diameterOfBinaryTree = function(root) {
  function dfs(root) {
      if (root == null)
          return 0
      let left = dfs(root.left, distance)
      let right = dfs(root.right, distance)
      distance = Math.max(left + right, distance) // 当前节点的distance
      return Math.max(left, right) + 1 // 该节点作为子树的distance
  }
  
  let distance = 0
  dfs(root)
  return distance
};
