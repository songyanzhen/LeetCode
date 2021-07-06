/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const employee = employees.find((item) => item.id === id);
  const stack = [employee];

  let res = 0;

  while (stack.length) {
    const cur = stack.pop();
    res += cur.importance;
    const subs = cur.subordinates;
    for (let i = 0; i < subs.length; i += 1) {
      const nextEmployee = employees.find((item) => item.id === subs[i]);
      stack.push(nextEmployee);
    }
  }

  return res;
};
// @lc code=end
