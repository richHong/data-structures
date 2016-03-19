var BinarySearchTree = function(value){
  var obj = Object.create(binaryMethods);
  obj.right = undefined;
  obj.left = undefined;
  obj.value = value;

  return obj;
};

var binaryMethods ={ 
  insert : function(val){
    if(val > this.value){
      if(this.right !== undefined){
        this.right.insert(val);
      } else {  
      this.right = new BinarySearchTree(val);
      }
    } else if(val < this.value){
      if(this.left !== undefined){
        this.left.insert(val)
      } else {
      this.left = new BinarySearchTree(val);
      }
    }
  },
  contains : function(val){
    var result = false;

    var finder = function(tree){
     
      result = _.contains(tree, val);
    
    if (result === false){  
    
      if (tree.right){
        finder(tree.right);  
      }
      if ((tree.left) && (result === false)){  
        finder(tree.left);
      }
    }

    };

    finder(this);

    return result;
  },
  depthFirstLog : function(funk){
    funk(this.value);
    if(this.right){
    this.right.depthFirstLog(funk);  
    }
    if(this.left){  
    this.left.depthFirstLog(funk);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
