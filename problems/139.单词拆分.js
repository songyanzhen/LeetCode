/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 可以类比于背包问题
    let len = s.length
    let res = []
    // memo[i] 表示 s 中以 i - 1 结尾的字符串是否可被 wordDict 拆分
    for(let i = 0; i <= len; i++)
        res[i] = false
    res[0] = true // 空字符串时为true
    
    for(let i = 1; i <= len; i++) {
        for(let j = 0; j < i; j++) {
            if(res[j] && (wordDict.indexOf(s.substring(j, i)) != -1)) {
                res[i] = true
                break
            }
        }
    }
    console.log(res)
    return res[len]
};

