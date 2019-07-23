/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
由于每个节点只有唯一一个父节点，我们可以使用到字典的value-key的形式（节点-父节点）
字典中预置根节点的父节点为None。
字典建立完成后，二叉树就可以看成一个所有节点都将最终指向根节点的链表了。
于是在二叉树中寻找两个节点的最小公共节点就相当于，在一个链表中寻找他们相遇的节点
后面的思路可以参考力扣中这个题目的代码实现 160.相交链表
*/
var lowestCommonAncestor = function(root, p, q) {
    let map = new Map()
    map.set(root, null)
    
    var bfs = function(node) {
        if (node) {
            if (node.left)
                map.set(node.left, node)
            if (node.right)
                map.set(node.right, node)
            bfs(node.left)
            bfs(node.right)
        }
    }
    bfs(root)
    let [l1, l2] = [p, q]
    console.log(map.get(p))
    
    /**
     * 根据题目意思 如果两个链表相交，那么相交点之后的长度是相同的
        我们需要做的事情是，让两个链表从同距离末尾同等距离的位置开始遍历。这个位置只能是较短链表的头结点位置。
        为此，我们必须消除两个链表的长度差
        1.指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
        2.如果 pA 到了末尾，则 pA = headB 继续遍历
        3.如果 pB 到了末尾，则 pB = headA 继续遍历
        4.比较长的链表指针指向较短链表head时，长度差就消除了
        5.如此，只需要将最短链表遍历两次即可找到位置
     */
    while (l1 != l2) {
        l1 = map.get(l1) ? map.get(l1) : q
        l2 = map.get(l2) ? map.get(l2) : p
    }
    return l1;
};

