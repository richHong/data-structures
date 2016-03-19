var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._holder = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //var bucket = this._storage.get(i);
  if (this._holder.length === 0) {
    this._storage.set(i,[[k,v]]);
    this._holder.push(k);
  } else if (_.contains(this._holder, k)) {
      this._storage.each(function(bucket, index, storage) {
        if(index === i){
          _.each(bucket, function(array, index){
            if (k === array[0]){
              array[1] = v;
            }
          });
        }
      });
  } else {
    this._storage.each(function(bucket, index, storage){
      if(index === i) {
            bucket.push([k,v])
      }    
    });
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  var result;
  _.each(bucket, function(array, index) {
    if(array[0] === k){
      result = array[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  _.each(bucket, function(array, index) {
    if(array[0] === k){
      array[1] = null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
