var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
  if (list.tail === null){
    list.tail = new Node(value);
    list.head = list.tail//{};
  } else {
    list.head.value = list.tail.value;
    list.tail = new Node(value);
    list.head.next = list.tail.value;
  }
  };

  list.removeHead = function(){
    var remove = list.head.value
    list.head.value = list.head.next;
    console.log('remove:', remove)
    return remove;
  };

  list.contains = function(target){
    var result = false;
    _.each(list, function(val, key, list){
      _.each(val, function(val2, key2, list2){
        if(val2 === target){
          result = true;
        }
      })
    })
    return result;
  };
  console.log("This is tail", list);
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
