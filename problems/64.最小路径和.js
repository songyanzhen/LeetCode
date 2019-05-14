/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
类似62题，动态规划，将原数组的节点修改为到当前节点的最短路径，
两个边的数值为该边到该点的累加，其余的点的数值为当前节点数值加左面或上面节点的最小值
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 && j == 0) {
                grid[i][j] = grid[i][j]
            } else if (i == 0) {
                grid[i][j] += grid[i][j - 1]
            } else if (j == 0) {
                grid[i][j] += grid[i - 1][j]
            } else {
                grid[i][j] += (grid[i - 1][j] > grid[i][j - 1] ? grid[i][j - 1] : grid[i - 1][j])
            }
        }
    }
    return grid[m - 1][n - 1]
};

