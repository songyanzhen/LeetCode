/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/*
首先，preorder 中的第一个元素一定是树的根，这个根又将 inorder 序列分成了左右两棵子树。
现在我们只需要将先序遍历的数组中删除根元素，然后重复上面的过程处理左右两棵子树。
*/
var buildTree = function(preorder, inorder) {
    
    if(preorder.length == 0)
        return null
    
    let val, node
    val = preorder.shift()
    node = new TreeNode(val)
    let mid = inorder.indexOf(val)
    if (mid == -1) { // 如果中序遍历数组中不包括该节点，则为null
        preorder.unshift(val)
        return null
    }
    node.left = buildTree(preorder, inorder.slice(0, mid))
    node.right = buildTree(preorder, inorder.slice(mid + 1))
    return node
};

