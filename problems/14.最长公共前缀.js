/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = '';
  if(strs.length == 0)
      return '';
  if(strs.length == 1)
      return strs[0];
  
  for(let i = 0; i < strs[0].length; i++) {
      if(strs[0][i] == strs[1][i]) {
          res += strs[0][i];
      } else {
          break;
      }
  }
  
  
  for(let i = 2; i < strs.length; i++) {
      for(let j = 0; j < res.length; j++) {
          if(strs[i][j] != res[j]) {
              res = res.substr(0, j);
          }
      }
  }
  return res;
};
