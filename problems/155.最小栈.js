/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.sortArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.arr.length===0 || x <= this.getMin()) { 
        this.sortArr.push(x);
    }
    this.arr.push(x);
    // console.log('push arr:', this.arr);
    // console.log('push sortArr:', this.sortArr);
    // console.log('push indexArr:', this.indexArr);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let temp = this.arr.pop();
    if (temp === this.sortArr[this.sortArr.length-1]) {
        this.sortArr.pop();
    }
    // console.log('pop arr:', this.arr);
    // console.log('pop sortArr:', this.sortArr);
    // console.log('pop indexArr:', this.indexArr);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortArr[this.sortArr.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */