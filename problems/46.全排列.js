/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 两层遍历 递归
// 第二层遍历上一级的结果，分别与当前级元素组成数组
var permute = function(nums) {
    let len = nums.length
    if (len === 0 || len === 1) return [nums]
    let res = []
    for(let i = 0 ; i < len ; i++){
        permute([...nums.slice(0, i), ...nums.slice(i + 1)])
            .forEach((item)=>res.push([nums[i], ...item]));
    }
    return res
};
