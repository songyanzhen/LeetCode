/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/*
假设候选队列为 A，已经站好队的队列为 B.
从 A 里挑身高最高的人 x 出来，插入到 B. 
因为 B 中每个人的身高都比 x 要高，因此 x 插入的位置，就是看 x 前面应该有多少人就行了。
比如 x 前面有 5 个人，那 x 就插入到队列 B 的第 5 个位置。
*/
var reconstructQueue = function(people) {
    // 先排序,同样大小的人，后一位小的在前，否则回错乱
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    })
    // 再一个个插入
    let res = []
    for (let i = 0, len = people.length; i < len; i++) {
        res.splice(people[i][1], 0, people[i]) // js向数组中插入数字
    }
    return res
    // 在原数组上操作
    // for(let i = 0, len = people.length; i < len; i++){
    //     if(people[i][1] !== i){
    //         let m = people[i];
    //         people.splice(i, 1);
    //         people.splice(m[1], 0, m);
    //     }
    // }
    // return people;
};

