/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1744] 你能在你最喜欢的那天吃到你最喜欢的糖果吗？
 */

// @lc code=start
/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  const needCandies = [[1, candiesCount[0]]];

  for (let i = 1; i < candiesCount.length; i += 1) {
    needCandies.push([
      needCandies[i - 1][0] + candiesCount[i - 1],
      needCandies[i - 1][1] + candiesCount[i],
    ]);
  }

  console.log(needCandies);

  const res = [];
  for (let i = 0; i < queries.length; i += 1) {
    const [type, day, maxPerDay] = queries[i];
    const min = day + 1;
    const max = maxPerDay * (day + 1);

    console.log(min, max, needCandies[type]);

    res.push(needCandies[type][1] >= min && needCandies[type][0] <= max);
  }

  return res;
};

// @lc code=end
