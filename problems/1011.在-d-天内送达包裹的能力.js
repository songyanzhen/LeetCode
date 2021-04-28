/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  let left = Math.max(...weights);
  let right = weights.reduce((total, current) => (total += current), 0);

  const judgeCanShip = (ship) => {
    let day = 1;

    let temp = 0;
    for (let i = 0; i < weights.length; i += 1) {
      if (temp + weights[i] > ship) {
        day += 1;
        temp = weights[i];

        if (day > D) {
          return false;
        }
      } else {
        temp += weights[i];
      }
    }

    return true;
  };

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (judgeCanShip(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
// @lc code=end
