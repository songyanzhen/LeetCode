/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */
/*
Map 集合中的键和值可以是任何类型。如果使用现有密钥向集合添加值，则新值会替换旧值。
*/
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this._root = new node()
};
var node = function(){
  this._isWord = false
  this.next = new Map()
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this._root
    let index = -1
    let len = word.length
    while(cur && len > ++index){
        let c = word.charAt(index)
        if(!cur.next.has(c)){
          cur.next.set(c, new node())
        }
        cur = cur.next.get( c )
    }
    cur._isWord = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this._root
    for(let i = 0; i < word.length; i ++){
        let c = word.charAt(i)
        if(!(cur.next.has( c ))){
          return false
        }
        cur = cur.next.get(c)
    }
    return cur._isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this._root
    for(let i = 0; i < prefix.length; i ++){
        let c = prefix.charAt(i)
        if(!(cur.next.has( c ))){
          return false
        }
        cur = cur.next.get(c)
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

