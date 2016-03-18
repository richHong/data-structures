var Tree = function(value){
  var newTree = Object.create(treeMethods)//{};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  var newBranch = new Tree(value);
  this.children.push(newBranch);
};



treeMethods.contains = function(target){
  var theTruth = false
  _.each(this.children, function(child){
    console.log(list)
    if(child.value === target){
      theTruth = true;
    }
  });
  return theTruth
};

//Tree.prototype = treeMethods;





/*
 * Complexity: What is the time complexity of the above functions?
 */
