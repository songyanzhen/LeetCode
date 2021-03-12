/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = [];
  for (let i = 0; i < nums.length; i += 1) {
    this.arr.push(nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let res = 0;
  for (let pos = i; pos <= j; pos += 1) {
    res += this.arr[pos];
  }
  return res;
};

const n = new NumArray([-2, 0, 3, -5, 2, -1]);
n.sumRange(0, 2);
console.log(n);

// [
//   ("NumArray", "sumRange", "sumRange", "sumRange")
// ][([[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5])];

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end
