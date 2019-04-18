/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.66%)
 * Total Accepted:    65.2K
 * Total Submissions: 174.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0, len = s.length; i < len; i++) {
        console.log(s[i]);
        if(s[i] == '(' || s[i] == '[' || s[i] == '{')
            stack.push(s[i]);
        else {
            if(s[i] == ')') {
                if(stack[stack.length - 1] == '(')
                    stack.splice(-1, 1);
                else return false;
            } else if(s[i] == ']') {
                if(stack[stack.length - 1] == '[')
                    stack.splice(-1, 1);
                else return false;
            } else if(s[i] == '}') {
                if(stack[stack.length - 1] == '{')
                    stack.splice(-1, 1);
                else return false;
            }
        }
    }
    return stack.length == 0 ? true : false;
};

