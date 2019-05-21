/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 /**
  * ns为移动窗口，以t的长度截取，若当前不包含t，则end++，否则start++，
  * 一直到end == s.length且ns不包含t时终止，
  * 其中res为ns的长度最短的值
  */
var minWindow = function(s, t) {
    let res = ''
    let tCount = {}, nsCount = {}
    for (let i = 0; i < t.length; i++) {
        tCount[t[i]] = tCount[t[i]] ? tCount[t[i]] + 1 : 1
    } // js对象存储t中每个字符出现的次数（hash）
    let sLen = s.length, tLen = t.length
    if(tLen > sLen)
        return ''
    let start = 0, end = tLen - 1
    for (let i = start; i < end + 1; i++) {
        nsCount[s[i]] = nsCount[s[i]] ? nsCount[s[i]] + 1 : 1
    } // js对象存储ns中每个字符出现的次数（hash），即当前窗口内
    while(end - start >= tLen - 1) {
        let ns = s.slice(start, end + 1)
        let flag = 1
        for (let i in tCount) { // 判断ns是否包含t的每个字符（包括数量）
            if (!nsCount[i] || nsCount[i] < tCount[i]) {
                flag = 0
                break
            }
        }
        if (flag) {
            if (!res) res = ns
            else res = res.length > ns.length ? ns : res
            nsCount[s[start]]--
            start++
        } else {
            end++
            nsCount[s[end]] = nsCount[s[end]] ? nsCount[s[end]] + 1 : 1
            if(end == sLen)
                break
        }
    }
    return res
};

