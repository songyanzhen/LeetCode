/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 超麻烦做法，一步一步画二维数组
var convert = function(s, numRows) {
  if (numRows == 1)
      return s
  if (numRows == 2) {
      let a = '', b = ''
      for (let i = 0, len = s.length; i < len; i++) {
          if (i % 2 == 0)
              a += s[i]
          else 
              b += s[i]
      }
      return a + b
  } // 1，2时为特殊情况
  let arr = []
  for (let i = 0; i < numRows; i++)
      arr[i] = []
  let step = 0, line = 0, count = 0, zNum = 2 * numRows - 2 // step为步数，line为第二个下标
  for (let i = 0, len = s.length; i < len; i++) {
      let time = step - zNum * count // time为第一个下标
      if (time < numRows) {
          arr[time][line] = s[i]
          step += 1
      } else {
          arr[zNum - time][++line] = s[i]
          step += 1
          if (step % zNum == 0) {
              count += 1
              line += 1
          }   
      }
  }
  let res = ''
  for (let i = 0; i < numRows; i++) {
      for (let v of arr[i]) {
          if (v)
              res += v
      }
  }
  return res
};

