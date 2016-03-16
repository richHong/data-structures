var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var obj = {};
  obj.count = 0;
  obj.storage = {};

  _.extend(obj, stackMethods);

  //push pop size

  return obj;


};

var stackMethods = {
  push: function(value){
    this.count++
    this.storage[this.count] = value;

  },
  pop: function(value){
    var remove = this.storage[this.count];
    delete remove;
    if(this.count !== 0){
      this.count--;
    }
    return remove;
  },
  size: function(value){
    return this.count;
  },


};


