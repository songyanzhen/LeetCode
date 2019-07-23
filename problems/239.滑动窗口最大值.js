/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
可以使用双向队列，该数据结构可以从两端以常数时间压入/弹出元素。
存储双向队列的索引比存储元素更方便，因为两者都能在数组解析中使用。
算法如下：

处理前 k 个元素，初始化双向队列。
遍历整个数组。在每一步 :
清理双向队列 :
    - 只保留当前滑动窗口中有的元素的索引。（删除最初i - k项索引）
    - 移除比当前元素小的所有元素，它们不可能是最大的。
将当前元素添加到双向队列中。
将 deque[0] 添加到输出中。 deque[0]为当前滑动窗口中最大值的索引
返回输出数组。

*/
var maxSlidingWindow = function(nums, k) {
    
    var clearQueue = function(i, k) {
        if (queue.length && queue[0] == i - k)
            queue.shift() // 只保留当前滑动窗口中有的元素的索引。（删除最初i - k项索引）
        while (queue.length && nums[i] > nums[queue[queue.length - 1]])
            queue.pop() // 移除比当前元素小的所有元素，它们不可能是最大的。
    }
    
    let queue = [], res = []
    let len = nums.length
    if (len == 0 || k == 0)
        return []
    if (k == 1)
        return nums
    for (let i = 0; i < k; i++) {
        clearQueue(i, k)
        queue.push(i)
    }
    res.push(nums[queue[0]])
    for (let i = k; i < len; i++) {
        clearQueue(i, k)
        queue.push(i) // 将当前元素添加到双向队列中
        res.push(nums[queue[0]]) // 将 deque[0] 添加到输出中。 deque[0]为当前滑动窗口中最大值的索引
    }
    return res
};

