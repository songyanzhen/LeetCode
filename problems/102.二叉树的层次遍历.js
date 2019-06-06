/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [], res = []
    if(root == null) return []
    root.level = 0 // 添加一个级别，作为结果分组用
    queue.push(root)
    while(queue.length) {
        let node = queue.shift()
        
        if(res[node.level]) {
            res[node.level].push(node.val)
        } else {
            res[node.level] = [node.val]
        }
        
        if(node.left) {
            node.left.level = node.level + 1
            queue.push(node.left)
        } 
        if(node.right) {
            node.right.level = node.level + 1
            queue.push(node.right)
        } 
    }
    return res
};

