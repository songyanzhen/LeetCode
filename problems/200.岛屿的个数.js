/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿的个数
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
/*
线性扫描整个二维网格，如果一个结点包含 1，则以其为根结点启动深度优先搜索。
在深度优先搜索过程中，每个访问过的结点被标记为 0。
计数启动深度优先搜索的根结点的数量，即为岛屿的数量。
*/
var dfs = function(grid, r, c) {
    let nr = grid.length
    let nc = grid[0].length
    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0')
        return
    grid[r][c] = '0'
    dfs(grid, r - 1, c)
    dfs(grid, r + 1, c)
    dfs(grid, r, c - 1)
    dfs(grid, r, c + 1)
}
var numIslands = function(grid) {
    if (grid.length == 0)
        return 0
    let nr = grid.length
    let nc = grid[0].length
    let res = 0
    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] == '1') {
                res++
                dfs(grid, r, c)
            }
        }
    }
    return res
};

