/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    if (head == null) return null
    
    let hasCycle = false
    
    let low = head, fast = head
    // 步骤一：使用快慢指针判断链表是否有环
    while (fast.next != null && fast.next.next != null) {
        low = low.next;
        fast = fast.next.next;
        if (low == fast) {
            hasCycle = true;
            break;
        }
    }
    // 步骤二：若有环，找到入环开始的节点
    if (hasCycle) {
        let temp = head
        while(temp != low) {
            temp = temp.next
            low = low.next
        }
        return temp
    } else {
        return null
    }
    // 返回值没说明白吧，要返回环的节点，而题中示例返回字符串，从而一直超时，真的弱智
};

