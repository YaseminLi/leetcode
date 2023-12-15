// /**
//  * Initialize your data structure here.
//  */
// var MyHashMap = function () {
//   this.hash = {}
// };

// /**
//  * value will always be non-negative. 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//   this.hash[key]=value
// };

// /**
//  * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//   if(this.hash[key]!=null) return this.hash[key]
//   return -1
// };

// /**
//  * Removes the mapping of the specified value key if this map contains a mapping for the key 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//   delete this.hash[key]

// };

// /**
//  * Your MyHashMap object will be instantiated and called as such:
//  * var obj = new MyHashMap()
//  * obj.put(key,value)
//  * var param_2 = obj.get(key)
//  * obj.remove(key)
//  */

//  const obj=new MyHashMap()
// obj.put(1,2)
// var param_2 = obj.get(1)
// obj.remove(1)
// console.log(param_2,obj);

// 上面这种对象键值对的方法，不是哈希结构
// 用key当索引的话。浪费太多空间

//哈希结构
//能 O(1)O(1) 时间内进行插入和删除，可以保存不重复元素的一种数据结构。
//根据关键码去寻找值的数据映射结构，查字典，根据拼音找页码
// 如果每个字放一页，可以避免重复，但占据空间太大

//① 求hash到数组中的位置；② 在链表中遍历找key。
//时间复杂度n/b
//空间复杂度n+b


var MyHashMap = function () {
  this.base =769//base选值随意
  this.data=new Array(this.base).fill(0).map(()=>new Array())
};

MyHashMap.prototype.put = function (key, value) {
  const h=this.hash(key)

  for(const it of this.data[h]){
    if(it[0]===key){
      it[1]=value
      return 
    }
  }
  this.data[h].push([key,value])
};

MyHashMap.prototype.get=function(key,value){
  const h=this.hash(key)
  for(const it of this.data[h]){
    if(it[0]===key){
      return it[1]
    }
  }
  return -1
}

MyHashMap.prototype.remove = function (key) {
  const h=this.hash(key)
  for(const it of this.data[h]){
    if(it[0]===key){
      const idx = this.data[h].indexOf(it);
            this.data[h].splice(idx, 1);
            return;
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key%this.base 
};


 const obj=new MyHashMap()
obj.put(1,2)
var param_2 = obj.get(1)
obj.remove(1)
console.log(param_2,obj);