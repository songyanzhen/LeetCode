/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
这个优化算法与暴力算法仅有两处不同：这些数字用一个 HashSet 保存（或者用 Python 里的 Set），
实现 O(1)O(1) 时间的查询，同时，我们只对 当前数字 - 1 不在哈希表里的数字，
作为连续序列的第一个数字去找对应的最长序列，这是因为其他数字一定已经出现在了某个序列里。
 */
var longestConsecutive = function(nums) {    
    let obj = {}
    let len = nums.length
    for(let i = 0; i < len; i++) {
        obj[nums[i]] = 1
    }
    let maxLen = 0
    
    for(let i in obj) {
        if(!obj[i - 1]) { // 当前key为初始位置
            let currNum = Number(i) // 注意转为number类型
            let currLen = 1
            while(obj[currNum + 1]) { // 往下寻找是否有连续序列
                currNum++
                currLen++
            }
            maxLen = Math.max(maxLen, currLen)
        }
    }
    return maxLen
};
