/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前K个高频元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i]))
            map.set(nums[i], map.get(nums[i]) + 1)
        else 
            map.set(nums[i], 1)
    }
    let arr = Array.from(map).sort((a, b) => {
        return b[1] - a[1]
    })
    let res = []
    for (let i = 0; i < k; i++) {
        res[i] = arr[i][0]
    }
    return res
};

