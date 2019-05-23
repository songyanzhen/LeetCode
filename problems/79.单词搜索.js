/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 // DFS
 // 测试用例：[["a"]] "ab" 测试时为false，提交时为true？？？
var book = []// 记录走过的点
var map = [] // 全局board
var gword = '' // 全局word
var n, m // 全局边界
var flag = 0 // 全局标记
var next = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 下一步

var dfs = function(x, y, str) {
    if (str == gword) {
        flag = 1
        return
    }
    if (str.length == gword.length) // 不等于word的情况
        return
    let tx ,ty;
    for (let i = 0; i < 4; i++) {
        tx = x + next[i][0]
        ty = y + next[i][1]
        if(tx < 0 || tx == n || ty < 0 || ty == m)  //判断是否越界
            continue
        if(book[tx][ty] == 0)
        {
            book[tx][ty] = 1  //标记这个点已经走过
            dfs(tx, ty, str + map[tx][ty])  //开始尝试下一个点
            book[tx][ty] = 0  //尝试结束，取消这个点的标记 
        } 
    }
    return
};

var exist = function(board, word) {
    gword = word
    map = board
    n = board.length
    m = board[0].length
    
    for (let i = 0, ilen = board.length; i < ilen; i++) {
        book[i] = []
        for (let j = 0, jlen = board[0].length; j < jlen; j++)
            book[i][j] = 0
    }
    
    for (let i = 0, ilen = board.length; i < ilen; i++)
        for (let j = 0, jlen = board[0].length; j < jlen; j++) {
            book[i][j] = 1
            dfs(i, j, map[i][j])
            if(flag) 
                return true
        }
    return false
};

