/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let map = new Map()
  for (let i = 0, jLen = J.length; i < jLen; i++)
      map.set(J[i], 1)
  
  let count = 0
  for (let i = 0, sLen = S.length; i < sLen; i++)
      if (map.has(S[i]))
          count += 1
  return count
};

