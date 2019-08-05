/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
如果最右端的一部分已经排好序，这部分的每个数都比它左边的最大值要大，
同理，如果最左端的一部分排好序，这每个数都比它右边的最小值小。
所以我们从左往右遍历，如果i位置上的数比它左边部分最大值小，则这个数肯定要排序， 就这样找到右端不用排序的部分，
同理找到左端不用排序的部分，它们之间就是需要排序的部分
*/
var findUnsortedSubarray = function(nums) {
  let len = nums.length
  if (len < 2)
      return 0
  let min = Number.MAX_VALUE
  let max = -Number.MAX_VALUE
  let l = 0, r = 0
  for (let i = 0; i < len; i++) { // 从左往右查
      if (max > nums[i])
          r = i
      max = Math.max(max, nums[i])
      console.log(max)
  }
  for (let i = len - 1; i >= 0; i--) { // 从右往左查
      if (min < nums[i])
          l = i
      min = Math.min(min, nums[i])
  }
  console.log(r, l)
  return r == l ? 0 : r - l + 1
};

