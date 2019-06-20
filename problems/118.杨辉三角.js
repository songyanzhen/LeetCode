/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    if(numRows == 0)
        return res;
    else if (numRows == 1) {
        res[0] = [1];
        return res;
    }
    else if (numRows == 2) {
        res[0] = [1];
        res[1] = [1, 1];
        return res;
    } else {
        res[0] = [1];
        res[1] = [1, 1];
        for(let i = 2; i < numRows; i++) {
            let a = [];
            a[0] = 1;
            a[i] = 1;
            for(let j = 1; j < i; j++) {
                a[j] = res[i - 1][j - 1] + res[i - 1][j];
            }
            res[i] = a;
        }
        return res;
    }
};

