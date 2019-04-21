/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.55%)
 * Total Accepted:    9.4K
 * Total Submissions: 35.5K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let long = 0
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === '(') {
            let left = 1
            for (let j = i + 1; j < len; j++) {
                if (s[j] === '(') {
                    left++
                } else {
                    left--
                }
                if (left === 0) {
                    let nowLon = j - i + 1
                    long = long > nowLon ? long : nowLon
                }
                if (left < 0) {
                    break
                }
            }
        }
    }
    return long
};

