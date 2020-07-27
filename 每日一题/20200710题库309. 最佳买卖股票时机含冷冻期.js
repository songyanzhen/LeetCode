// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 示例:

// 输入: [1,2,3,0,2]
// 输出: 3
// 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

// sell[i]表示截至第i天，最后一个操作是卖时的最大收益；
// buy[i]表示截至第i天，最后一个操作是买时的最大收益；
// cool[i]表示截至第i天，最后一个操作是冷冻期时的最大收益；
// 递推公式：
// sell[i] = max(buy[i-1]+prices[i], sell[i-1]) (第一项表示第i天卖出，第二项表示第i天保留)
// buy[i] = max(cool[i-1]-prices[i], buy[i-1]) （第一项表示第i天买进，第二项表示第i天没有买进）
// cool[i] = sell[i - 1]
// */

var maxProfit = function (prices) {
  const length = prices.length;
  if (length === 0) return 0;

  const sell = [],
    buy = [],
    cool = [];
  sell[0] = 0;
  cool[0] = 0;
  buy[0] = -prices[0];
  for (let i = 1; i < length; i += 1) {
    sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1]);
    buy[i] = Math.max(cool[i - 1] - prices[i], buy[i - 1]);
    cool[i] = sell[i - 1];
  }
  return Math.max(sell[length - 1], cool[length - 1]);
};
