/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && q){
         return false;
       }
    if(p && !q){
        return false;
       }
    if(p && q && (p.val !=q.val)){
        return false;
       
       }
    if(!p && !q){
        return true;
       }
    
    return isSameTree(p.left, q.left)&&isSameTree(p.right, q.right);
};

