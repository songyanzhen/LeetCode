/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let len = s.length
    
    // 1. 先将字符串处理一下 将开头的 ')' 和结尾的 '(' 删除
    //     例如   'aa)()(ff' 处理成   'aa()ff'
    let left = 0, right = 0
    while (left >= 0 && left < len && s[left] !== '(') {
        if (s[left] === ')') {
            s = s.slice(0, left) + s.slice(left + 1) // 不包含left
            len--
        } else {
            left++
        }
    }
    while (len - right - 1 >= 0 && right > -1 && s[len - right - 1] !== ')') {
        if (s[len - right - 1] === '(') {
            s = s.slice(0, len - right - 1) + s.slice(len - right) // 不包含left
            len--
        } else {
            right++
        }
    }
    // 特殊情况处理
    if (len === 0)
        return ['']
    if (len === 1 && s[0] !== '(' && s[0] !== ')')
        return [s]
    
    // 2. 算出这个字符串到底需要删除几个 '(' 和几个 ')' 
    //     例如  aa())(() 需要删除一个（和 一个）得到  aa()()
    let delLeft = 0, delRight = 0, count = 0
    for (let i = 0; i < len; i++) {
        if (s[i] === '(')
            count++
        else if (s[i] === ')')
            count--
        if (count === -1) {
            delRight += -1
            count = 0
        }
    }
    if (count > 0)
        delLeft = count
    else 
        delRight += count
    
    // 判断字符串是否合法的函数
    let isValid = function(s) {
        let number = 0;
        for (let i = 0, len = s.length; i < len; i++) {
          if (s[i] === '(')
              number++
          else if (s[i] === ')')
              number--;
          if (number === -1) {
            return false;
          }
        }
        return number === 0;
    }
    
    // 3.编写递归 知道了左右括号个被删除几次 
    //   当删除完成时 就可以使用当前字符串加上剩余字符串  然后判断是否成立
    //   number计数器
    let res = []
    let helper = function(str, number, length, delLeft, delRight) {
        if (number < 0 || length > len)
            return;
        if (delLeft === 0 && delRight === 0 ) // 删除完成后判断字符串是否合法并存入结果数组
            return isValid(str + s.slice(length)) && res.push(str + s.slice(length));
        if (s[length] === '(') {
            helper(str+'(', number+1, length+1, delLeft, delRight) // 不删除该(
            delLeft > 0 && helper(str, number, length+1, delLeft-1, delRight) // 删除该(
        } else if (s[length] === ')') {
            helper(str+')', number-1, length+1, delLeft, delRight) // 不删除该)
            delRight > 0 && helper(str, number, length+1, delLeft, delRight-1) // 删除该)
        } else {
            helper(str+s[length], number, length+1, delLeft, delRight)
        }
    }
    helper('', 0, 0, delLeft, -delRight)
    // 4. 数组去重 有可能会有多个相同的 答案被添加到数组
    return Array.from(new Set([...res]))
};

