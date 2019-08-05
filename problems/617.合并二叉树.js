/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {    
  if (t1 == null && t2 == null)
      return null
  let root = new TreeNode((t1 == null ? 0 : t1.val) + (t2 == null ? 0 : t2.val))
  root.left = mergeTrees(t1 == null ? null : t1.left, t2 == null ? null : t2.left)
  root.right = mergeTrees(t1 == null ? null : t1.right, t2 == null ? null : t2.right)
  return root
};

