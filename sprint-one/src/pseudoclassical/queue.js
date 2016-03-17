var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.reverseCount = 1;

};

Queue.prototype.enqueue = function(value){
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function(){
  var remove = this.storage[this.reverseCount];
  delete this.storage[this.reverseCount];
  this.reverseCount++;
  return remove;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length
};

