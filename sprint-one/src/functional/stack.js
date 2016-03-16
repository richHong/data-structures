var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value){
    count++;
    storage[count] = value;
    console.log(storage[count])
  };

  someInstance.pop = function(){
    var removed = storage[count]
    delete storage[count];
    if(count !== 0){
    count--;
    }
    return removed;
  };
console.log('after pop', storage[count])
  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
