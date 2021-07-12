/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * 思路：一次遍历，如果为0则放到数组开头，如果为2则放到数组末尾
 * 但是他妈为啥提交之后改不了原数组鸭，一样的测试用例都是好使的 （菜比ß）
 */

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    }
  }

  for (let i = nums.length; i >= 0; i -= 1) {
    if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
    }
  }
};

var sortColors = function (nums) {
  let p0 = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      p0 += 1;
    } else if (nums[i] === 1) {
      nums.splice(i, 1);
      nums.splice(p0, 0, 1);
    }
  }
};
