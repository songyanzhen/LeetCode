/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
let max_sum
var maxPathSum = function(root) {
    max_sum = -99999999 // 初始化max_sum
    max_gain(root)
    return max_sum
};
// 考虑实现一个简化的函数 max_gain(node) ，参数是一个顶点，计算它及其子树的最大贡献
var max_gain = function(node) {
    // 边界情况：如果节点为空，那么最大权值是 0 。
    if (node == null) return 0
    
    // 对该节点的所有孩子递归调用 max_gain，计算从左右子树的最大权值：
    // left_gain = max(max_gain(node.left), 0) 和 right_gain = max(max_gain(node.right), 0)。
    let left_gain = Math.max(max_gain(node.left), 0)
    let right_gain = Math.max(max_gain(node.right), 0)
    
    // 检查是维护旧路径还是创建新路径
    // 创建新路径的权值是：price_newpath = node.val + left_gain + right_gain
    let price_newpath = node.val + left_gain + right_gain
    
    // 当新路径更好的时候更新 max_sum
    max_sum = Math.max(max_sum, price_newpath)
    
    // 对于递归返回的到当前节点的一条最大路径，计算结果为：node.val + max(left_gain, right_gain)
    return node.val + Math.max(left_gain, right_gain)
}

