/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (21.28%)
 * Total Accepted:    13.2K
 * Total Submissions: 59.4K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 
 * 
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length, pLen = p.length;
    let dp = new Array();
    for(let i = 0; i <= sLen; i++)
        dp[i] = new Array();
    dp[0][0] = true;
    // dp[i][j] => s[0...i-1]与p[0...j-1]匹配
    for(let i = 1; i <= sLen; i++)
        dp[i][0] = false; //模板字符串为空
    for(let i = 1; i <= pLen; i++)
        dp[0][i] = i > 1 && p[i - 1] == '*' && dp[0][i - 2]; //原字符串为空
    // 考虑边界值的情况
    
    for(let i = 1; i <= sLen; i++) {
        for(let j = 1; j <= pLen; j++) {
            if(p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 2] || // 0位的情况，即与往前两位的模板字符串匹配
                    ((s[i - 1] == p[j - 2] || p[j - 2] == '.') && dp[i - 1][j]);
                    // 1位以上的情况，当前字符与星号前字符相同或为'.'，
                    // 并且该字符前的字符串与当前模板匹配（因为x*是万能的不管当前字符有几位都可以匹配）
            } else {
                dp[i][j] = ((s[i - 1] == p[j - 1]) || (p[j - 1] == '.')) && dp[i - 1][j - 1];
            } // p[j - 1]不为*时，字符相等或模板字符为'.'，并且该字符前的两个字符串也相匹配
        }
    }
    return dp[sLen][pLen]; // dp[i][j] => s[0...i-1]与p[0...j-1]匹配
}
