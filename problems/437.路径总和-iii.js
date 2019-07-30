/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
// 首先先序递归遍历每个节点，再以每个节点作为起始点递归寻找满足条件的路径。
var pathSum = function(root, sum) {
    let res = 0
    if (root == null)
        return 0
    res += findNode(root, sum) // 以根节点出发的路径
    res += pathSum(root.left, sum)
    res += pathSum(root.right, sum) // 遍历树，对每个节点都进行求路径和遍历
    return res
};
// 在以 node 为根节点的树中找路径和为 sum 的路径，并返回路径数量
var findNode = function(node, sum) {
    if (node == null)
        return 0
    let res = 0
    if (node.val == sum)
        res += 1
    res += findNode(node.left, sum - node.val)
    res += findNode(node.right, sum - node.val)
    return res
}

