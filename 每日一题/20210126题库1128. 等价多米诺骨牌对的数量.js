/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const obj = {};

  dominoes.forEach((item) => {
    const key = item.sort().join("");
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  });

  const arr = Object.values(obj);
  // 排列组合 从n个里选2个
  const res = arr.reduce((res, value) => res + (value * (value - 1)) / 2, 0);

  return res;
};
// @lc code=end

numEquivDominoPairs([
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2],
]);
