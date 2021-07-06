/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1734] 解码异或后的排列
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
/*
 * 因为是小于等于n的数，且不会重复，即所有数字在[1,n]中且不重复
 * 设n=5
   则perm=[a,b,c,d,e]
       enco=[f,g,h,i]
   因为n确定，所以可以知道所有数的异或结果
   即a^b^c^d^e的结果是知道的
 * 我们知道的是enco的值，只需要找到perm的随意一个位置的值就可以构造答案
 * 可以发现
   f=a^b
   g=b^c
   h=c^d
   i=d^e
 * 现在知道a^b^c^d^e，可以用g=b^c和i=d^e去消除，只剩下一个a，这样perm就构造出来一个元素，即答案
 */
var decode = function (encoded) {
  const n = encoded.length + 1;
  let totalXor = 1;
  for (let i = 2; i <= n; i += 1) {
    totalXor = totalXor ^ i;
  }

  let first = totalXor;
  for (let i = 1; i < encoded.length; i += 2) {
    first = first ^ encoded[i];
  }

  const res = [first];

  for (let i = 0; i < encoded.length; i += 1) {
    res.push(res[i] ^ encoded[i]);
  }

  return res;
};
// @lc code=end
