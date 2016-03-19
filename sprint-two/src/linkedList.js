var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
  if (list.tail === null){
    list.tail = new Node(value);
    list.head = list.tail;
  } else {
    var temp = new Node(value);
    list.tail.next = temp.value;
    list.tail = temp;
  }
  };

  list.removeHead = function(){
    var remove = list.head.value;
    list.head.value = list.head.next;
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
