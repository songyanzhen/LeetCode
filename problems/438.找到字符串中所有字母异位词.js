/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/*
双指针加Map(哈希)，你值得拥有
滑动窗口算法的思路是这样：

1、我们在字符串 S 中使用双指针中的左右指针技巧，初始化 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。

2、我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 T 中的所有字符并且长度与p相等）。

3、此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新一轮结果。

4、重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

这个思路其实也不难，第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，最终找到最优解。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动。

needs 和 window 相当于计数器，分别记录 T 中字符出现次数和窗口中的相应字符的出现次数。
*/
var findAnagrams = function(s, p) {
    let res = []
    let left = 0, right = 0
    let sLen = s.length, pLen = p.length
    // needs 和 window 相当于计数器，分别记录 s, p 中字符出现次数和窗口中的相应字符的出现次数。
    let needs = new Map()
    let window = new Map()
    let str = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 26; i++) {
        window.set(str[i], 0)
    }
    for (let i = 0; i < pLen; i++) {
        if (needs.has(p[i]))
            needs.set(p[i], needs.get(p[i]) + 1)
        else
            needs.set(p[i], 1)
    }
    console.log(needs.size)
    let match = 0
    while (right < sLen) {
        let c1 = s[right]
        if (needs.get(c1) > 0) {
            window.set(c1, window.get(c1) + 1)
            if (window.get(c1) == needs.get(c1))
                match += 1 // 匹配不同字符的个数（重复的已经计数统计了）
        }
        right += 1
        while (match == needs.size) {
            console.log(right, left)
            // 如果 window 的大小合适
            // 就把起始索引 left 加入结果
            if (right - left == pLen) { // right已经加1，所以次数不再减1
                res.push(left)
            }
            let c2 = s[left];
            if (needs.get(c2) > 0) {
                window.set(c2, window.get(c2) - 1)
                if (window.get(c2) < needs.get(c2))
                    match -= 1 // 如果某字符不匹配，则match数减1
            }
            left += 1
        }
    }
    return res
};

// 字符串排序 超时辣
//     const sortString = (s) => s.split('').sort().join('')
    
//     let res = []
//     let pLen = p.length
//     let pSort = sortString(p)
//     for (let i = 0, sLen = s.length; i < sLen - pLen + 1; i++) {
//         let now = s.slice(i, i + pLen)
//         now = sortString(now)
//         if (now == pSort)
//             res.push(i)
//     }
//     return res

