/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const getLastNodes = (root) => {
    const lastNodes = [];
    const dfs = (node) => {
      if (!node.left && !node.right) {
        lastNodes.push(node.val);
      }
      if (node.left) {
        dfs(node.left);
      }
      if (node.right) {
        dfs(node.right);
      }
    };
    dfs(root);
    return lastNodes;
  };

  const arr1 = getLastNodes(root1);
  const arr2 = getLastNodes(root2);
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
// @lc code=end
