/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 同样的方法不知道为什么js最后输出的树中没有null
// 层次遍历生成字符串,队列生成数组，栈生成树
var serialize = function(root) {
    let s = ''
    let queue = []
    queue.push(root)
    while(queue.length) {
        root = queue.shift()
        if (root) {
            s += root.val
            queue.push(root.left)
            queue.push(root.right)
        } else {
            s += 'n'
        }
    }
    console.log(s)
    return s
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split('')
    if (arr[0] == 'n')
        return null
    let queue = []
    let root = new TreeNode(arr[0])
    queue.push(root)
    let i = 1 // 计数组下标
    while (queue.length) {
        let node = queue.pop()
        if (node.val == null)
            continue
        // 当前节点左节点
        node.left = arr[i] != 'n' ? new TreeNode(arr[i]) : null
        console.log(node.left)
        // 当前节点右节点
        node.right = arr[i + 1] != 'n' ? new TreeNode(arr[i + 1]) : null
        i += 2
        queue.push(node.left)
        queue.push(node.right)
    }
    return root
};  

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /**
  * Python代码
  * def serialize(self, root):

        s = ""
        queue = []
        queue.append(root)
        while queue:
            root = queue.pop(0)
            if root:
                s += str(root.val)
                queue.append(root.left)
                queue.append(root.right)
            else:
                s += "n"
            s += " "        
        return s

    def deserialize(self, data):
 
        tree = data.split()
        print(tree)
        if tree[0] == "n":
            return None
        queue = []
        root = TreeNode(int(tree[0]))
        queue.append(root)
        i = 1
        while queue:
            cur = queue.pop(0)
            if cur == None:
                continue
            cur.left = TreeNode(int(tree[i])) if tree[i] != "n" else None
            cur.right = TreeNode(int(tree[i + 1])) if tree[i + 1] != "n" else None
            i += 2
            queue.append(cur.left)
            queue.append(cur.right)
        return root
  */

