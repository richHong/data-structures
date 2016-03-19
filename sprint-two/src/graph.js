

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this.nodes[node]){
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  //console.log(fromNode)
  return _.contains(this.nodes[fromNode].edge, toNode);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.nodes[fromNode].edge === undefined){
  this.nodes[fromNode].edge = [];
  }
  if(this.nodes[toNode].edge === undefined){
    this.nodes[toNode].edge = [];
  }
  this.nodes[fromNode].edge.push(toNode);
  this.nodes[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  _.each(this.nodes[fromNode].edge, function(edge1, index1, list){
    if (edge1 === toNode){
      //console.log('edge1', list)
      // this.nodes[fromNode].edge.splice(index1,1);
      list.splice(index1, 1);
    } 
  });
  _.each(this.nodes[toNode].edge, function(edge2, index2, list2){
    if (edge2 === fromNode){
      // this.nodes[toNode].edge.splice(index2,1);
      list2.splice(index2, 1)
    } 
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  // console.log('this:',this);
  //console.log(this);
  for(var key in this.nodes){
    cb(key);
    //console.log(this.nodes)
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



