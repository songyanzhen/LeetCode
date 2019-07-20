/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
step1：按照基准值将区间划分为左右区间，左区间的元素都是大于基准值，右区间的元素都是小于基准值
step2：递归左区间，递归右区间
step3：当基准值索引刚好等于k-1时，返回基准值即为所求
*/
var findKthLargest = function(nums, k) {
    let flag = nums[0]; // 基准
    let left = [], right = [];
    for(let i = 1; i < nums.length; i++) { // 左大右小
        if(nums[i] >= flag) 
            left.push(nums[i]);
        else
            right.push(nums[i]);
    }
    let res = [...left, flag, ...right]
    let lLen = left.length // 基准值的位置
    if (lLen == k - 1)
        return flag
    else if (lLen < k - 1) { // 在右面找
        return findKthLargest(right, k - lLen - 1)
    }
    else { // lLen > k - 1 在左面找
        return findKthLargest(left, k)
    }
};

