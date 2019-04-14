/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (24.73%)
 * Total Accepted:    51.2K
 * Total Submissions: 206K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
/*
    动态规划
    dp二维数组
    dp[i][j] = true; s[i]-s[j]为回文字符串
    dp[i][j] = dp[i+1][j-1] && s[i] == s[j] 回文串左右两边加同样字符
    默认：dp[i][i] = true;
         dp[i][i+1] = (s[i] == s[i + 1])
*/
var longestPalindrome = function(s) {
    let len = s.length;
    let dp = new Array();
    for(let i = 0; i < len; i++) { //默认情况
        dp[i] = new Array();
        dp[i][i] = true;
        if(s[i] == s[i + 1])
            dp[i][i + 1] = true;
    } 
    for(let i = len - 1; i > -1; i--) { // 动态规划，注意一定要倒序遍历，否则会出现undefined的情况
        for(let j = len - 1; j > i + 1; j--) { //遍历到 j = i + 2即可，因为二位的回文字符串已经确定
            dp[i][j] = (dp[i + 1][j - 1] && (s[i] == s[j]));
        }
    }
    let [start, end] = [0, 0];
    for(let i = 0; i < len; i++) { // 获取最长回文字符串位置
        for(let j = i + 1; j < len; j++) {
            // console.log((j - i) > (end - start));
            if(dp[i][j] && ((j - i) > (end - start))) {
                start = i;
                end = j;
            }
        }
    }    
    return s.substring(start, end + 1);  // 返回截取的回文字符串
};

