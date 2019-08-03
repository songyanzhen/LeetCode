/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
遍历数组nums，计算从第0个元素到当前元素的和，用哈希表保存出现过的累积和sum的次数。
如果sum - k在哈希表中出现过，则代表从当前下标i往前有连续的子数组的和为sum。
(sum - k存在即代表连续从sum - k 到 sum 连续数组和为 k)
时间复杂度为O(n)，空间复杂度为O(1)。
*/
var subarraySum = function(nums, k) {
  let map = new Map()
  map.set(0, 1)
  let sum = 0, res = 0
  for (let i = 0, len = nums.length; i < len; i++) {
      sum += nums[i]
      if (map.has(sum - k))
          res += map.get(sum - k)
      if (map.has(sum))
          map.set(sum, map.get(sum) + 1)
      else
          map.set(sum, 1)
  }
  return res
};

