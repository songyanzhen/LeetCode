/**
 * @param {number[]} nums
 * @return {number}
 */
/*
使用数组中的值作为索引下标进行遍历，遍历的结果肯定是一个环（有一个重复元素） 检测重复元素问题转换成检测环的入口 为了找到环的入口，可以进行如下步骤：
1.设置两个快慢指针， fast每次走两步，slow每次走一步，最终走了slow走了n步与fast相遇，fast走了2*n，fast可能比slow多饶了环的i圈，得到环的周长为n/i
2.slow指针继续走, 且另设第三个指针每次走一步，两个指针必定在入口处相遇
`假设环的入口和起点的距离时m
`当第三个指针走了m步到环的入口时
`slow刚好走了n + m步，换句话说时饶了环i圈（环的周长为n/i）加m步（起点到入口的距离）
`得到相遇的是环的入口，入口元素即为重复元素
*/
var findDuplicate = function(nums) {
    let slow = 0, fast = 0, len = nums.length
    while(1) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow == fast)
            break
    }
    let finder = 0
    while (1) {
        slow = nums[slow]
        finder = nums[finder]
        if (slow == finder)
            return slow
    }
};
