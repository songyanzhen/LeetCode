/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const res = new ListNode();
  res.next = head;

  let temp = res;

  while (temp) {
    const next = temp.next;
    if (next && next.val === val) {
      temp.next = next.next;
    } else {
      temp = temp.next;
    }
  }

  return res.next;
};
// @lc code=end
