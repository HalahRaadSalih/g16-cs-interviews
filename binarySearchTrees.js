/*
  constructor class for node
*/
var Node = function(val){
  this.val = val;
  this.left = null,
  this.right = null
};

/*
  constructor class for BinarySearchTree
*/
var BinarySearchTree = function(){
  this.root = null;
  this.height = 0;
}


BinarySearchTree.prototype.push = function (val) {
  // get the root
  var root = this.root;

  // if there is not root, create one
  if(!root){
    this.root = new Node(val);
    return
  }

  // otherwise, create new node
  // decide whether it is on the left or on the right
  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode){
    if(val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = newNode;
        break;
      }
      else{
        currentNode = currentNode.left;
      }
    }

    else{
      if(!currentNode.right){
        currentNode.right = newNode;
        break;
      }
      else{
        currentNode = currentNode.right;
      }
    }
  }
  this.height = updateHeight(root);

};

BinarySearchTree.prototype.print = function () {
  var root = this.root;

  if(!root){
    console.log('The tree is empty');
  }

  var currentNode = root;
  console.log(currentNode.val);

  var left = currentNode.left;
  var right = currentNode.right;

  while(!!left){
    console.log(left.val);
    if(!!left.right){
      console.log(left.right.val);

    }
    left = left.left;
  }

  while(!!right){
    console.log(right.val);
    if(!!right.left){
      console.log(right.left.val);

    }
    right = right.right;
  }

};
var updateHeight = function(node){
  if(!node){
    return 0;
  }

  return 1 + Math.max(updateHeight(node.left), updateHeight(node.right));
}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(-1);
bst.push(-11);
bst.push(-19);
bst.push(5);
bst.push(51);
bst.push(30);
bst.push(1.5);

bst.print();
