var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined) {

    this._storage.set(i,[[k,v]]);

  } else if (_.contains(bucket, k)) {

    _.each(bucket, function(array){
      if (k === array[0]) {
        array[1] = v;
      }
    });

  } else {
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result;

  _.each(bucket, function(array) {
    if(array[0] === k){
      result = array[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  _.each(bucket, function(array) {
    if(array[0] === k){
      array[1] = null;
    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
