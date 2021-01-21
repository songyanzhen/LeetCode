/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function (root) {
  const res = [];
  let maxTimes = 0;
  let currentTimes = 0;

  const inOrder = (node) => {
    inOrder(node.left);
    console.log(node);
    inOrder(node.right);
  };
};
