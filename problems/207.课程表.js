/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/*
拓扑排序
1、在开始排序前，扫描对应的存储空间（使用邻接表），将入度为 0 的结点放入队列。
2、只要队列非空，就从队首取出入度为 0 的结点，将这个结点输出到结果集中，并且将这个结点的所有邻接结点（它指向的结点）的入度减 1，在减 1 以后，如果这个被减 1 的结点的入度为 0 ，就继续入队。
3、当队列为空的时候，检查结果集中的顶点个数是否和课程数相等即可。


在代码具体实现的时候，除了保存入度为 0 的队列，我们还需要两个辅助的数据结构：
1、邻接表：通过结点的索引，我们能够得到这个结点的后继结点；
2、入度数组：通过结点的索引，我们能够得到指向这个结点的结点个数。
*/
var canFinish = function(numCourses, prerequisites) {
    
    if (null == prerequisites || numCourses == 0 || prerequisites.length == 0)
        return true;
    // 步骤1：统计每个顶点的入度
    // 入度数组，记录了指向它的结点的个数，一开始全部为 0
    let preCourses = [] // 邻接表（图）
    let inDegrees = [] // 入度数组
    for (let i = 0; i < numCourses; i++) {
        preCourses[i] = []
        inDegrees[i] = 0 // 初始化入度表
    } //每门课对应一个子数组
    // 想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]
    // [0, 1] 表示 1 在先，0 在后
    for(let link of prerequisites){
        inDegrees[link[1]]++
        preCourses[link[0]].push(link[1])
    }
    // 步骤2：拓扑排序开始之前，先把所有入度为 0 的结点加入到一个队列中
    // 首先遍历一遍，把所有入度为 0 的结点都加入队列
    let queue = []
    for (let i = 0; i < numCourses; i++)
        if (inDegrees[i] == 0)
            queue.push(i)
    
    let counter = 0
    while(queue.length) {
        let top = queue.shift() // 获取队首元素
        counter++
        // 步骤3：把这个结点的所有后继结点的入度减去 1，如果发现入度为 0 ，就马上添加到队列中
        for (let i of preCourses[top]) {
            inDegrees[i]--
            if (inDegrees[i] == 0)
                queue.push(i)
        }
    }
    return counter == numCourses
}

