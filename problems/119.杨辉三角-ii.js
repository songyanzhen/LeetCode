/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [];
    res[0] = [1];
    res[1] = [1, 1];
    for(let i = 2; i < rowIndex + 1; i++) {
        let a = [];
        a[0] = 1;
        a[i] = 1;
        for(let j = 1; j < i; j++) {
            a[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res[i] = a;
    }
    return res[rowIndex];
};

