/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 可以直接遍历，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
var subsets = function(nums) {
    let res = [[]]
    for (let i = 0, nLen = nums.length; i < nLen; i++) {
        for (let j = 0, rLen = res.length; j < rLen; j++) {
            res.push([...res[j], nums[i]])
        }
    }
    return res
};

