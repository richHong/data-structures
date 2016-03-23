var Queue = function(){
  
  var someInstance = {};
  var storage = {};
  var count = 0;
  var reverseCount = 1;

  someInstance.enqueue = function(value){

    count++;
 
    storage[count] = value;

  };

  someInstance.dequeue = function(){

    var removed = storage[reverseCount];

    delete storage[reverseCount];

    reverseCount++;

    return removed;
  };

  someInstance.size = function(){

    return Object.keys(storage).length;
  };

  return someInstance;
};
