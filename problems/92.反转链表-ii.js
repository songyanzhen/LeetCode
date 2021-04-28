/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};

var reverseBetween = function (head, left, right) {
  const res = new ListNode(0);
  res.next = head;
  let prev = res;

  // head = [1,2,3,4,5], left = 2, right = 4

  // prev指向左面left前一位 [1]
  for (let i = 0; i < left - 1; i += 1) {
    prev = prev.next;
  }

  // 记录右面节点，rightNode指向right那位[4, 5]
  let rightNode = prev;
  for (let i = left; i <= right; i += 1) {
    rightNode = rightNode.next;
  }

  let leftNode = prev.next; // leftNode 指向left [2, 3, 4, 5]
  let curr = rightNode.next; // 截断的右面 [5]

  prev.next = null; // 截断左面,此时prev为节点 [1]
  rightNode.next = null; // 截断中间 leftNode -> rightNode为需要反转的链表 [2, 3, 4];

  reverseLinkedList(leftNode); // 反转链表[4, 3, 2] 此时rightNode仍然指向[4] leftNode仍然指向[2]

  prev.next = rightNode; // 将左面和反转后的链表拼接
  leftNode.next = curr; // 将反转后的链表和右面拼接

  return res.next;
};
// @lc code=end
