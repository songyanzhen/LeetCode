/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (43.81%)
 * Total Accepted:    20.2K
 * Total Submissions: 45.1K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 调用k -1次
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    
    let mergeList = lists[0]
    for (let i = 1, len = lists.length; i < len; i++) {
        mergeList = merge2Lists(mergeList, lists[i])
    }
    return mergeList
};
// 合并二个链表
var merge2Lists = function(l1, l2) {
    let head = new ListNode()
    let mergeList = head
    while(l1 && l2) {
        if(l1.val < l2.val) {
            mergeList.next = l1
            mergeList = mergeList.next
            l1 = l1.next
        } else {
            mergeList.next = l2
            mergeList = mergeList.next
            l2 = l2.next
        }
    }
    mergeList.next = l1 == null ? l2 : l1
    return head.next
};

