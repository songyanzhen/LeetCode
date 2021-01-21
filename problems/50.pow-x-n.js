/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  var result = 1;

  if (n > 0) {
    for (var i = 0; i < n; i++) {
      result *= x;
    }
  } else {
    var abs = Math.abs(n);
    var y = 1 / x;
    for (var i = 0; i < abs; i++) {
      result *= y;
    }
  }
  return Number(result.toFixed(5));
};
