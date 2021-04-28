/*
 * @lc app=leetcode.cn id=1603 lang=javascript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.bigCount = big;
  this.mediumCount = medium;
  this.smallCount = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1) {
    if (this.bigCount > 0) {
      this.bigCount -= 1;
      return true;
    }
  } else if (carType === 2) {
    if (this.mediumCount > 0) {
      this.mediumCount -= 1;
      return true;
    }
  } else if (carType === 3) {
    if (this.smallCount > 0) {
      this.smallCount -= 1;
      return true;
    }
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
