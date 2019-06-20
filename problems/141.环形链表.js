/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针，快指针走两个，慢指针走一格，如果相遇则有环，如果快指针到头则无环
var hasCycle = function(head) {
    
    if(head == null || head.next == null)
        return false
    let low = head, fast = head.next
    while(low != fast) {
        if (fast == null || fast.next == null)
            return false
        low = low.next;
        fast = fast.next.next
    }
    return true
};

