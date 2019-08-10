/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x == 0)
      return 0
  else if (x > 0) {
      let str = String(x)
      let res = ''
      let flag = 1
      for (let len = str.length, i = len - 1; i >= 0; i--) {
          if (str[i] != 0 || !flag) {
              flag = 0
              res += str[i]
          }
      }
      if(Number(res) > 2147483647 || Number(res) < -2147483648)
          return 0
      return Number(res)
  } else {
      let str = String(x)
      let res = ''
      let flag = 1
      for (let len = str.length, i = len - 1; i > 0; i--) {
          if (str[i] != 0 || !flag) {
              flag = 0
              res += str[i]
          }
      }
      if(Number(res) > 2147483647 || Number(res) < -2147483648)
          return 0
      return Number('-' + res)
  }
};

