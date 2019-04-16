/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (32.49%)
 * Total Accepted:    39.4K
 * Total Submissions: 118.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Maintain two pointers and update one with a delay of n steps.
var removeNthFromEnd = function(head, n) {
    let before = head, after = head;
    // console.log(before, after);
    for(let i = 0; i < n; i++) {
        after = after.next;
    }
    if(after === null)
        return before.next; //如果删除倒数第n个节点，即第一个节点时
    while(after.next != null) {
        before = before.next;
        after = after.next;
    }
    before.next = before.next.next;
    return head;
};
