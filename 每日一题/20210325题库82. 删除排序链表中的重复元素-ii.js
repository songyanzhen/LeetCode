/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const res = new ListNode();
  res.next = head;
  let temp = res;

  let cur = -101;

  while (temp) {
    if (temp.next && temp.next.next && temp.next.val === temp.next.next.val) {
      cur = temp.next.val;
      temp.next = temp.next.next;
    } else if (temp.next && temp.next.val === cur) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return res.next;
};
// @lc code=end
