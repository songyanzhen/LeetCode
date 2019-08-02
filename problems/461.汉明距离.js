/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/*
将两个数异或运算得到n，那么n里面1的个数就是结果
汉明重量：二进制中1的个数 汉明距离：两个二进制中,位数不同的个数

汉明重量计算： n &= n - 1
这个操作对比当前操作位高的位没有影响，对低位则完全清零。
拿6（110）来做例子，
第一次 110&101=100，这次操作成功的把从低位起第一个1消掉了，同时计数器加1。
第二次100&011=000，同理又统计了高位的一个1，此时n已变为0，不需要再继续了，于是110中有2个1。
*/
var hammingDistance = function(x, y) {
  let xor = x ^ y
  let res = 0
  while (xor !== 0) {
      xor &= xor - 1
      res += 1
  }
  return res
};

