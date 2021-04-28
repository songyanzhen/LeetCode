/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 举个例子,如果我们考虑nums = [1,2,2]nums=[1,2,2],并且已经构造了res = [[], [1], [2], [1, 2]]res=[[],[1],[2],[1,2]]，再加入2时就不可以与resres配对了。
// 其实解决方法很简单，考虑如果nums[i] == nums[i-1]nums[i]==nums[i−1],那么我们只能与之前新构成的子集配对.
// 这时只需要利用new_subsets即可。在刚才的例子中，只需要与newsubset = [[2], [1,2]]newsubset=[[2],[1,2]]配对就行啦。

var subsetsWithDup = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  const nLen = sortedNums.length;

  let res = [[]];
  let newSubsets = [];

  for (let i = 0; i < nLen; i++) {
    const rLen = res.length;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      newSubsets = newSubsets.map((item) => [...item, nums[i]]);
    } else {
      newSubsets = [];
      for (let j = 0; j < rLen; j++) {
        newSubsets.push([...res[j], nums[i]]);
      }
    }

    res = [...res, ...newSubsets];
  }
  return res;
};

subsetsWithDup([4, 4, 4, 1, 4]);

// @lc code=end
