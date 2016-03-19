var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.headCount = 0;


  list.addToTail = function(value){
  if (list.tail === null){
    list[list.count] = new Node(value);
    list.tail = list[list.count];
    list.head = list[list.count];
  } else {
    list.count++;
    list[list.count] = new Node(value);
    list.tail.next = list[list.count].value;
    list.tail = list[list.count];
  }
  };

  list.removeHead = function(){
    var remove = list.head.value;
    delete list[list.headCount];
    list.headCount++;
    list.head = list[list.headCount];
    return remove;
  };

  list.contains = function(target){
    var result = false;
    _.each(list, function(obj, key, list){
      _.each(obj, function(val, key2, list2){
        if(val === target){
          result = true;
        }
      });
    });
    return result;
  };

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
