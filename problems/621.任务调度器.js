/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */
/*
A -> B -> (单位时间) -> A -> B -> (单位时间) -> A -> B
很容易观察到，前面两个 A 任务一定会固定跟着 2 个单位时间的间隔。
最后一个 A 之后是否还有任务跟随取决于是否存在与任务 A 出现次数相同的任务。

该例子的计算过程为：
(任务 A 出现的次数 - 1) * (n + 1) + (出现次数为 3 的任务个数)，即：
(3 - 1) * (2 + 1) + 2 = 8

所以整体的解题步骤如下：
1.计算每个任务出现的次数
2.找出出现次数最多的任务，假设出现次数为 x
3.计算至少需要的时间 (x - 1) * (n + 1)，记为 min_time
4.计算出现次数为 x 的任务总数 count，计算最终结果为 min_time + count
特殊情况：结果小于数组长度，返回数组长度
*/


var leastInterval = function(tasks, n) {
  let len = tasks.length
  if (len <= 1)
      return len
  let map = new Map() // 记录每个任务出现的次数
  for (let t of tasks) {
      map.set(t, map.has(t) ? map.get(t) + 1 : 1)
  }
  
  let arr = Array.from(map).sort((a, b) => b[1] - a[1])
  let max = arr[0][1] // 出现最多次任务的次数
  let time = (max - 1) * (n + 1) // 至少需要的最短时间
  
  for (let a of arr) {
      if (a[1] === max)
          time += 1
  }
  return time >= len ? time : len
};

