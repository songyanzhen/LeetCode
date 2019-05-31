/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
/**中序遍历，数组递增 */
var isValidBST = function(root) {
    let arr = inorderTraversal(root)
    console.log(arr)
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] <= arr[i - 1])
            return false
    }
    return true
};
var inorderTraversal = function(root) {
    if(!root) return []
    return[...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};


