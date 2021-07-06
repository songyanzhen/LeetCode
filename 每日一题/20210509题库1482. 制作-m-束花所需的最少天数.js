/*
 * @lc app=leetcode.cn id=1482 lang=javascript
 *
 * [1482] 制作 m 束花所需的最少天数
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) {
    return -1;
  }
  const daysSorted = Array.from(new Set(bloomDay)).sort((a, b) => a - b);
  let left = 0;
  let right = daysSorted.length - 1;

  const judge = (day) => {
    const arr = [];
    for (let i = 0; i < bloomDay.length; i += 1) {
      arr[i] = bloomDay[i] <= day ? 1 : 0;
    }

    let count = 0;
    let temp = 0;
    let index = 0;

    while (index < arr.length) {
      if (arr[index] === 1) {
        temp += 1;
      } else {
        temp = 0;
      }

      if (temp === k) {
        temp = 0;
        count += 1;
      }

      index += 1;
    }
    return count >= m;
  };
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    const judgeRes = judge(daysSorted[mid]);

    if (judgeRes) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return daysSorted[left];
};

minDays([1000000000, 1000000000], 1, 1);
// @lc code=end
