/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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

// 拆分->归并
var sortList = function(head) {
    let list = new ListNode(0)
    list.next = head
    let p = head
    // 求链表长度
    let length = 0
    while(p) {
        length++
        p = p.next
    }
    for (let size = 1; size < length; size *= 2) {
        let cur = list.next
        let tail = list
        while(cur) {
            let left = cur
            let right = cut(left, size) // left->@->@ right->@->@->@...
            cur = cut(right, size) // left->@->@ right->@->@  cur->@->...

            tail.next = merge(left, right)
            while(tail.next) {
                tail = tail.next // 保证tail为拼接链表尾部
            }
        }
    }
    return list.next
};

// cut(l, n)，可能有些同学没有听说过，它其实就是一种 split 操作，即断链操作。
// 不过我感觉使用 cut 更准确一些，它表示，将链表 l 切掉前 n 个节点，并返回后半部分的链表头。
var cut = function(head, n) {
    let p = head
    while(p && --n) {
        p = p.next
    }
    if (!p) return null

    // 返回链表头，而不是全部
    let next = p.next;
    p.next = null;
    return next;
}

// merge(l1, l2)，双路归并，我相信这个操作大家已经非常熟练的，就不做介绍了。
var merge = function(l1, l2) {
    let list = new ListNode(0)
    let p = list
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1
            p = p.next // p = l1
            l1 = l1.next
        } else {
            p.next = l2
            p = p.next // p = l2
            l2 = l2.next
        }
    }
    p.next = l1 ? l1 : l2
    return list.next
}
