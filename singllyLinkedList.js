/*
constructor class for node
*/
var Node = function(val){
  this.val = val;
  this.next = null
};

var SinglyLinkedList = function(){
  this.length = 0;
  this.head = null;
};

SinglyLinkedList.prototype.insert = function(val){
  var head = this.head;

  // if there is not head, create one
  // update length
  if(!head){
    this.head = new Node(val);
    this.length++;

    return;
  }
  // otherwise, create new node
  var currentNode = head;
  var newNode = new Node(val);

  //iterate all nodes till you find a null
  while(currentNode.next){
    currentNode = currentNode.next;

  }
  // set the new nodes
  currentNode.next = newNode;
  //update length
  this.length++;

}

var sll = new SinglyLinkedList();

sll.insert(5);
sll.insert(9);
sll.insert(6);


console.log(sll);
