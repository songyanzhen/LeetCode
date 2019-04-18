/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (68.97%)
 * Total Accepted:    19.8K
 * Total Submissions: 28.5K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 
 * 例如，给出 n = 3，生成结果为：
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
// 递归，在之前的结果中，每当遇到一个左括号就在它后面加一个 " () " ,最后再加上"()"+之前结果。
var generateParenthesis = function(n) {
    let arr = ['()']
    if (n === 1) return arr
    for (let i = 2; i < n + 1; i++) {
        console.log(i, arr)
        let res = []
        for (let cur of arr) {
            for (let i = 0, len = cur.length; i < len; i++) {
                if (cur[i] === '(')
                    res.push(`${cur.substring(0, i + 1)}()${cur.substring(i + 1)}`)
            }
            res.push(`()${cur}`)
        }
        arr = [...new Set(res)]
    }
    return(arr)
};

