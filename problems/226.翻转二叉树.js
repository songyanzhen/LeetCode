/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
/*
反转一颗空树结果还是一颗空树。对于一颗根为 rr，左子树为 \mbox{right}，
右子树为 \mbox{left} 的树来说，它的反转树是一颗根为 rr，
左子树为 \mbox{right} 的反转树，右子树为 \mbox{left} 的反转树的树。
*/
var invertTree = function(root) {
    if (root == null)
        return null
    let leftTree = invertTree(root.left)
    let rightTree = invertTree(root.right)
    root.left = rightTree
    root.right = leftTree
    return root
};

