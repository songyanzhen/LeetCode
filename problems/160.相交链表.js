/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/*
这个方法比较巧妙，时间复杂度较低O(n)
假设两条链表有交点，可知相交部分等长
那么交点位置距离链表尾的距离必小于等于较短的链表
先将较长的链表剪去前面部分，使其的长度等于较短的链表
此时将指针从当前的headA 和headB同时向后移动，且对比指针是否相同，若相同则输出指针。
*/
var getIntersectionNode = function(headA, headB) {
    let lenA = 0, lenB = 0
    let pA = headA, pB = headB
    while(pA) {
        lenA++
        pA = pA.next
    }
    while(pB) {
        lenB++
        pB = pB.next
    }
    let maxLen, minLen, maxList, minList
    if (lenA > lenB) {
        maxLen = lenA
        minLen = lenB
        maxList = headA
        minList = headB
    } else {
        maxLen = lenB
        minLen = lenA
        maxList = headB
        minList = headA
    }
    while(maxLen != minLen) {
        maxList = maxList.next
        maxLen--
    }
    
    let pMax = maxList, pMin = minList
    
    while(pMax) {
        if (pMax == pMin) 
            return pMax
        pMax = pMax.next
        pMin = pMin.next
    }
    return null
};

