/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
/*
1.先用slow-fast指针法找到链表中点
2.然后将链表后半部分反转
3.最后判断两个链表是否相同
*/
var isPalindrome = function(head) {
    if (head == null || head.next == null) {
        return true
    }
    let slow = head
    let fast = head
    while (fast) {
        slow = slow.next
        fast = fast.next ? fast.next.next : fast.next
    } // 快慢指针找中点，快指针速度为慢指针的2倍，最后慢指针则为中点
    slow = reverse(slow)
    while (slow) {
        if (head.val != slow.val)
            return false
        else {
            head = head.next
            slow = slow.next
        }
    }
    return true
};

var reverse = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    let pNext, pPre = null //翻转之后 第一个节点的next值 为 null
    while(head) {
        pNext = head.next
        head.next = pPre
        pPre = head
        head = pNext
    }
    return pPre
}
// 递归反转链表，学习一哈
//     ListNode* rev(ListNode* h)
//     {
//         if(h==NULL||h->next==NULL)
//             return h;
//         ListNode *p=rev(h->next);
//         h->next->next=h;
//         h->next=NULL;
//         return p;
//     }

