// 输入一个字符串，打印出该字符串中字符的所有排列。

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = new Set();
  const visited = [];
  const len = s.length;

  const backTrack = (str, i, n, temp) => {
    if (i === n) {
      res.add(temp.join(""));
      return;
    }
    for (let j = 0; j < n; j += 1) {
      if (visited[j]) {
        continue;
      }
      visited[j] = true;
      temp.push(s[j]);
      backTrack(str, i + 1, n, temp);
      temp.pop();
      visited[j] = false;
    }
  };

  backTrack(s, 0, len, []);
  return Array.from(res);
};
