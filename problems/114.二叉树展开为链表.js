/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 把左右子树变成单链表的形式，然后把左子树插入右子树。
var flatten = function(root) {
    if(root == null)
        return
    else {
        flatten(root.left)
        flatten(root.right)
        if(root.left == null)
            return
        else {
            let temp = root.right
            root.right = root.left
            root.left = null
            p = root.right
            while(p.right != null)
                p = p.right
            p.right = temp
            return
        }

    }
};


/* 太LOW勒，先序遍历完重置root
var inorderTraversal = function(root) {
    if(!root) return []
    return[root.val, ...inorderTraversal(root.left), ...inorderTraversal(root.right)]
};
var flatten = function(root) {
    if(root == null)
        return null
    let arr = inorderTraversal(root)
    root.left = null
    root.right = null
    let node = root
    for (let j = 1, len = arr.length; j < len; j++) {
        node.right = new TreeNode(arr[j])
        node = node.right
    }
};
*/

