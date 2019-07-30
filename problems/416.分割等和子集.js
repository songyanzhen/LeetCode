/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
这是一道以 0-1 背包问题为背景的算法练习题，我们把这个题目翻译一下：
给定一个只包含正整数的非空数组。是否可以从这个数组中挑选出一些正整数，每个数只能用一次，使得这些数的和等于整个数组元素的和的一半。

0-1 背包问题也是最基础的背包问题，它的特点是：待挑选的物品有且仅有一个，可以选择也可以不选择。下面我们定义状态，不妨就用问题的问法定义状态试试看。

dp[i][j] ：表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和等于 j。

根据我们学习的 0-1 背包问题的状态转移推导过程，新来一个数，例如是 nums[i]，根据这个数可能选择也可能不被选择：
如果不选择 nums[i]，在 [0, i - 1] 这个子区间内已经有一部分元素，使得它们的和为 j ，那么 dp[i][j] = true；
如果选择 nums[i]，在 [0, i - 1] 这个子区间内就得找到一部分元素，使得它们的和为 j - nums[i] ，我既然这样写出来了，你就应该知道，这里讨论的前提条件是 nums[i] <= j。
以上二者成立一条都行。于是得到状态转移方程是：
    dp[i][j] = dp[i - 1][j] or dp[i - 1][j - nums[i]], (nums[i] <= j)
*/
var canPartition = function(nums) {
    let len = nums.length
    // 求和
    let sum = nums.reduce((total, num) => total += num, 0)
    
    // 如果整个数组的和都不是偶数，就无法平分
    if (sum % 2 === 1)
        return false
    
    let target = sum / 2
    let dp = []
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    for (let j = 0; j <= target; j++) {
        dp[0][j] = false
        if (nums[0] == j)
            dp[0][j] = true
    } // 初始化第一行
    for (let i = 1; i < len; i++) { // 物品索引
        for (let j = 0; j <= target; j++) { // 容量
            if (j >= nums[i])
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
            else
                dp[i][j] = dp[i - 1][j]
        }
    }
    return dp[len - 1][target]
};

