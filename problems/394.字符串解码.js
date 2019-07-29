/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */
/**
 * @param {string} s
 * @return {string}
 */
/*
思路： 两个栈，一个记录'['前的数字，一个记录'['和']'之间的字符串

1.当遇到数字字符，直到'['前的数字并入栈，
2.同时，找到该数字对应的'['之后到下一个数字或者']'之前的字符串入字符串栈
3.当遇到']'时对当前栈进行处理:
取出数字栈栈顶元素和字符串栈栈顶元素，
根据规则获得重复次数自后的字符串
如果当前数字栈不为空，说明当前获得的字符串被另外一个'[' ']'包围，此时需要更新字符串栈栈顶元素，
更新为：当前栈顶元素 + 此次处理得到的重复字符串 + 当前']'之后一个字符到下一个为数字字符或者']'之前的字符串
如果当前数字栈为空，直接把当前处理字符串添加到结果中.
*/
var decodeString = function(s) {
    
    const repeatStr = function(s, num) {
        let rs = ''
        for (let i = 0; i < num; i++)
            rs += s
        return rs
    }
    
    let numStack = [], strStack = []
    let res = ''
    
    for (let i = 0, len = s.length; i < len; i++) {
        let c = s[i]
        if (c >= 0 && c <= 9) {
            console.log(c)
            let m = i + 1
            while (s[m] >= 0 && s[m] <= 9) {
                m++
            }
            numStack.push(s.substring(i, m))
            i = m + 1 // 数字后面一定是[，所以阔以跳过一位
            let k = i
            while (s[k] != ']' && !(s[k] >= 0 && s[k] <= 9)) {
                // 数字后面[后的字母
                k++
            }
            strStack.push(s.substring(i, k))
            i = k - 1 // 循环后i++，所以k - 1即可       
        } else if (c == ']') {
            let str = strStack.pop()
            let num = numStack.pop()
            let nowStr = repeatStr(str, num)
            // 如果当前数字栈不为空，说明当前获得的字符串被另外一个'[' ']'包围，此时需要更新字符串栈栈顶元素，
            // 更新为：当前栈顶元素 + 此次处理得到的重复字符串 + 当前']'之后一个字符到下一个为数字字符或者']'之前的字符串
            if (numStack.length) {
                let temp = strStack.pop()
                temp += nowStr
                let m = i + 1
                while (s[m] != ']' && !(s[m] >= 0 && s[m] <= 9)) {
                    m++
                }
                temp += s.substring(i + 1, m)
                strStack.push(temp)
                i = m - 1
            } else {
                res += nowStr
            }  
        } else if (numStack.length == 0) {
            res += s[i]
        }
    }
    return res
};

