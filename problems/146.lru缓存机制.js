/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */
/**
 * @param {number} capacity
 */
// https://juejin.im/post/5be38e4c51882516c56cfa3b
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key)
    this.map.set(key, val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) { 
      this.map.delete(key) 
    }
    this.map.set(key, value)
    
    // keys() 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值。
    let keys = this.map.keys()
    while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
