/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */
/**
 * 我们定义函数f(i,j) f(i,j)f(i,j)表示word1[:i]转换为word2[:j]需要的最少步骤。
    1.我们首先要比较word1[i-1]和word2[j-1]是不是相同，如果相同的话，我们就不用做任何操作，
    所以此时f(i,j)=f(i−1,j−1)（i和j都向前挪一个位置）。
    2.接着对于不相同的时候我们的情况比较复杂，我们有三种处理手段，分别是insert、replace和remove
    我们先看insert操作。我们insert完之后，也就是word1中的元素会保持不变，
    而j会向前挪一个位置，也就是f(i,j)=f(i,j−1)+1。
    接着考虑replace操作，replace会减少word1和word2中一个需要比较的元素
    （i和j会向前挪一个位置），也就是f(i,j)=f(i−1,j−1)+1。
    接着考虑最后一个remove操作，这个就很容易了，word1中会减少一个需要比较的元素，
    而我们j的位置不变，也就是f(i,j)=f(i−1,j)+1。
    所以我们最后的结果相当三者取最小值即可。
    f(i,j)=min(f(i−1,j),f(i,j−1),f(i−1,j−1))+1  if word1[i]≠word2[j]
    f(i,j)=f(i−1,j−1)   if word1[i]=word2[j]
    接着我们要考虑初始条件，也就是word1和word2为空的情况，
    此时也非常简单f(i,0)=i f(0,j)=j。
    所以我们最后的代码也就很容易了。
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   let len1 = word1.length, len2 = word2.length
   
   let res = []
   for (let i = 0; i <= len1; i++)
       res[i] = []
   for (let i = 0; i <= len1; i++)
       res[i][0] = i
   for (let j = 0; j <= len2; j++)
       res[0][j] = j
   for (let i = 1; i <= len1; i++) {
       for (let j = 1; j <= len2; j++) {
           if (word1[i - 1] == word2[j - 1]) {
               res[i][j] = res[i - 1][j - 1]
           } else {
                // console.log(res)
               res[i][j] = Math.min(res[i][j - 1], res[i - 1][j - 1], res[i - 1][j]) +1
              
           }
       }
   }
   return res[len1][len2]
};

