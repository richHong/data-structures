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
    // console.log('value is',value)
     console.log('this is storage after enqueue', storage)
  };

  someInstance.dequeue = function(){
    console.log("this is storage before dequeue", storage[reverseCount])
    //declare a varible to assign the item that we are going to delete
    var removed = storage[reverseCount];
    //delete the item
    delete storage[reverseCount];
    //conditional state that determines whether count is above zero
    if(count !== 0){
      //reduces the varible count by one
      count--
    }
    //increases reverseCount by one
    if(count === 0){
      reverseCount = 1;
    } else {
      reverseCount++;
    }
    //returns the deleted element
    return removed;
  };

  someInstance.size = function(){
    //returns count
    return count;
  };

  return someInstance;
};
