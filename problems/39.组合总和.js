/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 // https://blog.csdn.net/qq_17550379/article/details/82561538 超详细攻略
 // target = target - nums[i]
 var combinationSum = function(candidates, target) {
    let res = []
    let arr = candidates.sort((a, b)=>(a - b)) // 先排序
    let _combinationSum = function(nums, goal, index, path) { // 原数组，当前目标，初始索引，当前数组
        if (goal === 0) { // 当满足目标时将数组push
            res.push(path)
            return
        }
        if (goal < nums[0]) return // 如果剩余目标小于排序后数组的第一位，直接返回
        if (path && goal < path[-1]) return // 如果已存在数组，若剩余目标小于当前数组中最大值，直接返回
        for (let i = index, len = nums.length; i < len; i++) { // 递归调用函数
            _combinationSum(nums, goal - nums[i], i, [...path, nums[i]])
        }
    };
    _combinationSum(arr, target, 0, [])
    return res
};

