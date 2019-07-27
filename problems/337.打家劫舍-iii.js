/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
/*
可以把根节点看作一个很特殊的节点。因为打劫直接相连的房子会引发报警，
所以当打劫了根节点后，便不能打劫左右的子节点。
那么，就可以把问题简化成打劫根节点与不打劫根节点中求最大值的问题。
*/
var rob = function(root) {
    const recurrence = function(node) {
        if (node == null)
            return 0
        let include = node.val
        let exclude = recurrence(node.left) + recurrence(node.right)
        if (node.left) {
            include += recurrence(node.left.left)
            include += recurrence(node.left.right)
        }
        if (node.right) {
            include += recurrence(node.right.left)
            include += recurrence(node.right.right)
        }
        return Math.max(include, exclude)
    }
    return recurrence(root)
};

