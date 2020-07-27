// 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
// 像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
// 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。
// 假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。

// 注意：本题相对原题稍作改动，只需返回未识别的字符数

//

// 示例：

// 输入：
// dictionary = ["looked","just","like","her","brother"]
// sentence = "jesslookedjustliketimherbrother"
// 输出： 7
// 解释： 断句后为"jess looked just like tim her brother"，共7个未识别字符。
// 提示：

// 0 <= len(sentence) <= 1000
// dictionary中总字符数不超过 150000。
// 你可以认为dictionary和sentence中只包含小写字母。

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  if (sentence.length === 0) return 0;

  const dp = new Array(sentence.length).fill(0);

  for (let i = 1; i <= sentence.length; i += 1) {
    // 如果没有匹配那么dp[i]相比于dp[i-1]直接多1
    dp[i] = dp[i - 1] + 1;
    // 接着讨论如果新加一个字符，组成了一个词的情况
    // 遍历字典，如果句子i之前组成单词的话，则dp[i] = dp[i - wordLength]
    for (let j = 0; j < dictionary.length; j += 1) {
      const wordLength = dictionary[j].length;
      if (dictionary[j] === sentence.substring(i - wordLength, i)) {
        dp[i] = Math.min(dp[i], dp[i - wordLength]);
      }
    }
  }
  return dp[sentence.length];
};
