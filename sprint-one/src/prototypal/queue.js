var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  obj.reverseCount = 1;
  return obj;
};

var queueMethods = {
  enqueue: function(value){
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function(){
    var remove = this.storage[this.reverseCount];
    delete this.storage[this.reverseCount];
    this.reverseCount++;
    return remove;
  },
  size: function(){
    return Object.keys(this.storage).length;
  }
};


