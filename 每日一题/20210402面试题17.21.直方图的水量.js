// 题库42题
// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

// 示例：

// 输入: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// 输出: 6;

/**
 * @param {number[]} height
 * @return {number}
 */
// 找到最大值后，从两边向中间遍历
var trap = function (height) {
  let res = 0;
  let max = 0;
  let maxP = 0;
  const len = height.length;

  for (let i = 0; i < len; i += 1) {
    if (height[i] > max) {
      max = height[i];
      maxP = i;
    }
  }

  let l = height[0];
  let r = height[len - 1];
  // 遍历时两边最大的高度，若下一个比当前低，则加（l - height[i]），否则替换最大高度
  for (let i = 1; i < maxP; i += 1) {
    if (height[i] < l) {
      res += l - height[i];
    } else {
      l = height[i];
    }
  }

  for (let i = len - 2; i > maxP; i -= 1) {
    if (height[i] < r) {
      res += r - height[i];
    } else {
      r = height[i];
    }
  }

  return res;
};
