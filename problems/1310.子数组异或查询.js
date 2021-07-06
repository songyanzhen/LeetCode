/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const xorArr = [arr[0]];
  for (let i = 1; i < arr.length; i += 1) {
    xorArr.push(xorArr[i - 1] ^ arr[i]);
  }
  console.log(xorArr);

  const res = [];
  for (let i = 0; i < queries.length; i += 1) {
    const [l, r] = queries[i];
    if (l === 0) {
      res.push(xorArr[r]);
    } else {
      res.push(xorArr[r] ^ xorArr[l - 1]);
    }
  }

  return res;
};
// @lc code=end
