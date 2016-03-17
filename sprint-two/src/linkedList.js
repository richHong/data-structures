var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    list.tail = new Node(value);
  };

  list.removeHead = function(){
    delete list.head;
  };

  list.contains = function(target){
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
