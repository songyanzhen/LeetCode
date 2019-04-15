/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.17%)
 * Total Accepted:    47.6K
 * Total Submissions: 218.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = [];
    nums.sort((a, b) => { return a - b});
    for(let i = 0; i < nums.length; i++) { 
        // nums[i]始终为三元组最小值，否则会有重复
        if(nums[i + 2] != undefined) {
            let start = i + 1, end = nums.length - 1;
            // console.log(nums[i] + ' ' + nums[start] + ' ' + nums[end])
            while (start < end) {
                if((nums[start] + nums[end] + nums[i]) == 0) {
                    arr.push([nums[i], nums[start], nums[end]]);
                        start++;
                        end--;
                    while (nums[start] == nums[start - 1]) // 防止start连续
                        start++;
                    while (nums[end] == nums[end + 1]) // 防止end连续
                        end--;
                } else {
                    (nums[start] + nums[end] + nums[i]) < 0 ? start++ : end--;
                }
            }
        }
        while (nums[i + 1] == nums[i])
            i++; // 如果出现连续相等的情况，需要跳过，否则会重复（-1 -1 -1 0 1）
    }
    console.log(arr);
    return arr;
};

