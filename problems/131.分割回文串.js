/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const temp = [];
  const len = s.length;

  const isPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start += 1;
      end -= 1;
    }
    return true;
  };

  const dfs = (i) => {
    if (i === len) {
      res.push([...temp]);
    }

    for (let j = i; j < len; j += 1) {
      if (isPalindrome(s.substring(i, j + 1))) {
        temp.push(s.slice(i, j + 1));
        dfs(j + 1);
        temp.pop();
      }
    }
  };

  dfs(0);
  return res;
};

console.log(partition("aab"));
