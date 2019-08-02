/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
// 先遍历右子树，再处理节点，最后遍历左子树（中序遍历反过来）
var convertBST = function(root) { 
  const midTraverse = function(root) {
      if (root !== null)  {
      midTraverse(root.right)
      root.val = root.val + num // num记录大于当前节点值之和
      num = root.val // 对节点进行累加操作
      midTraverse(root.left)
      return root
      }
      return null
  }
  let num = 0 // 累加值
  return midTraverse(root)
};
