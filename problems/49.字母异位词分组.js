/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {} // 哈希表，用排序后的单词做key，value为数组
    for (let i = 0, len = strs.length; i < len; i++) {
        let key = strs[i].split('').sort().join('')
        if (!obj.hasOwnProperty(key))
            obj[key] = []
        obj[key].push(strs[i])
    }
    let res = []
    for(let prop in obj)
        res.push(obj[prop])
    return res
};

