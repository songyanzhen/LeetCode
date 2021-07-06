/*
 * @lc app=leetcode.cn id=1442 lang=javascript
 *
 * [1442] 形成两个异或相等数组的三元组数目
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const len = arr.length;
  let res = 0;

  for (let i = 0; i < len - 1; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      let left = 0;
      for (let a = i; a < j; a += 1) {
        left = left ^ arr[a];
      }
      let right = 0;
      for (let k = j; k < len; k += 1) {
        right = right ^ arr[k];
        if (left === right) {
          res += 1;
        }
      }
    }
  }

  return res;
};
// @lc code=end
