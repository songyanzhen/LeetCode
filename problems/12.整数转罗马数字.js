/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var intToRoman = function (num) {
  let res = [];

  let target = num;
  let MNums = Math.floor(target / 1000);
  res.push(...new Array(MNums).fill("M"));
  target %= 1000;
  let CMNums = Math.floor(target / 900);
  res.push(...new Array(CMNums).fill("CM"));
  target %= 900;
  let DNums = Math.floor(target / 500);
  res.push(...new Array(DNums).fill("D"));
  target %= 500;
  let CDNums = Math.floor(target / 400);
  res.push(...new Array(CDNums).fill("CD"));
  target %= 400;
  let CNums = Math.floor(target / 100);
  res.push(...new Array(CNums).fill("C"));
  target %= 100;
  let XCNums = Math.floor(target / 90);
  res.push(...new Array(XCNums).fill("XC"));
  target %= 90;
  let LNums = Math.floor(target / 50);
  res.push(...new Array(LNums).fill("L"));
  target %= 50;
  let XLNums = Math.floor(target / 40);
  res.push(...new Array(XLNums).fill("XL"));
  target %= 40;
  let XNums = Math.floor(target / 10);
  res.push(...new Array(XNums).fill("X"));
  target %= 10;
  let IXNums = Math.floor(target / 9);
  res.push(...new Array(IXNums).fill("IX"));
  target %= 9;
  let VNums = Math.floor(target / 5);
  res.push(...new Array(VNums).fill("V"));
  target %= 5;
  let IVNums = Math.floor(target / 4);
  res.push(...new Array(IVNums).fill("IV"));
  target %= 4;
  let INums = target;
  res.push(...new Array(INums).fill("I"));

  return res.join("");
};
// @lc code=end
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
