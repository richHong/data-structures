var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //console.log("storage line 6", storage)
  // Implement the methods below


  //Declare two variables one to keep track of size and one to keep track of first in que
  var count = 0;
  var reverseCount = 1;


  someInstance.enqueue = function(value){
    //increment count variable
    count++;
    //set storage key to count and storage property to value
    storage[count] = value;
    console.log('this is storage after enqueue', storage)
  };

  someInstance.dequeue = function(){
    console.log("this is storage before dequeue", storage)
    var removed = storage[reverseCount];
    delete storage[reverseCount];
    if(count !== 0){
      count--
    }
    reverseCount++;
    return removed;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
