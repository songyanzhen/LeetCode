/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/*
首先，我们初始化一个指向矩阵左下角的 (row，col)(row，col) 指针。（右上角也可以）
然后，直到找到目标并返回 true（或者指针指向矩阵维度之外的 (row，col)(row，col) 为止，
我们执行以下操作：
如果当前指向的值大于目标值，则可以 “向上” 移动一行。 
否则，如果当前指向的值小于目标值，则可以向右移动一列。
不难理解为什么这样做永远不会删减正确的答案：
因为行是从左到右排序的，所以我们知道当前值右侧的每个值都较大。
因此，如果当前值已经大于目标值，我们知道它右边的每个值会比较大。
也可以对列进行非常类似的论证，因此这种搜索方式将始终在矩阵中找到目标（如果存在）。

题解中给出的为左下角，此处用右上角做题
*/
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0)
        return false
    let m = matrix.length, n = matrix[0].length // m为高度，n为宽度
    
    let ve = 0, ho = n - 1 // matrix[ve][ho] 右上角
    while (1) {
        if (ho < 0 || ve >= m)
            return false
        if (target == matrix[ve][ho])
            return true
        else if (target > matrix[ve][ho])
            ve++
        else
            ho--
    }
};

