/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root)
};

var isMirror = function(node1, node2) {
    if(node1 == null && node2 == null) return true
    else if(node1 == null || node2 == null) return false // 有一个为null的情况
    return (node1.val == node2.val)
    && isMirror(node1.left, node2.right)
    && isMirror(node1.right, node2.left)
};

