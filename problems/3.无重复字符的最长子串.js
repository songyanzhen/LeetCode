/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.41%)
 * Total Accepted:    107.2K
 * Total Submissions: 369.3K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = ''; // 移动字符串
    let len = 0; // 移动字符串长度
    let maxLen = 0; // 最长无重复字串长度
    let pos; // 字符在移动字符串中的位置
    for(let i = 0; i < s.length; i++) {
        pos = str.indexOf(s[i]);
        if (pos > -1) { // 移动字符串含有s[i]
            str = str.substring(pos + 1) + s[i]; // 截取字符串并添加s[i]
            len = str.length;
        } else { // 移动字符串不包含是s[i]，直接添加到str后面
            str += s[i];
            len++;
        }
        maxLen = (maxLen > len) ? maxLen : len; // 取最长字串长度
    }
    return maxLen;
};

