/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let res = new TreeNode(null, null, null);
  let temp = res;

  const dfs = (node) => {
    if (node) {
      dfs(node.left);
      temp.right = new TreeNode(node.val, null, null);
      temp = temp.right;
      dfs(node.right);
    }
  };

  dfs(root);

  return res.right;
};
// @lc code=end
