/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();

  for (let i = 0; i < words.length; i += 1) {
    map.set(words[i], map.get(words[i]) ? map.get(words[i]) + 1 : 1);
  }

  const arr = Array.from(map)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  return arr.slice(0, k);
};

topKFrequent(["leetcode", "love", "i", "i", "love", "coding"], 2);
// @lc code=end
