/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length
    for (let i = 0, halfLen = Math.floor(len / 2); i < len; i++) {
        // 每个i表示一个圈，不论len是奇是偶都是一共有len/2个圈要进行旋转，从外圈向内依次旋转，直到中心点或者最内圈
        let start = i, end = len - i - 1 // 循环小圈的起点和终点 每行旋转第一位到倒数第二位
        for (let j = 0; j < end - start; j++) {
            let temp = matrix[start][start + j]
            matrix[start][start + j] = matrix[end - j][start]
            matrix[end - j][start] = matrix[end][end - j]
            matrix[end][end - j] = matrix[start + j][end]
            matrix[start + j][end] = temp
        }
    }
};