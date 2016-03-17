var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.count = 0;
this.storage = {};
this.remove;
// this.pop = pop;
// this.size = size;
// this.push = push;
};



Stack.prototype.push = function(value){
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function(){
  this.remove  = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count !== 0){
    this.count--;
  }
  return this.remove;
};

 Stack.prototype.size = function(){
  return this.count;
};
