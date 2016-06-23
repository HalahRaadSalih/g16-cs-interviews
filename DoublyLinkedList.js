var Node = function(val){
  this.val = val;
  this.next = null,
  this.prev = null
};

var DoubllyLinkedList = function(){
  this.head = null;
  this.length = 0;
}

DoubllyLinkedList.prototype.insert = function (val) {
  var head = this.head;
  var currentNode = head;
  var prevNode = head;

  //if no head
  if(!head){
    // create new node
    this.head = new Node(val);
  }
  else {
    // traverse the list
    while( currentNode && currentNode.next){
      // update prevNode and currentNode
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    // once you reach the end, create new node
    var newNode = new Node(val);
    // set the prev and the next for the new node
    newNode.prev = currentNode;
    newNode.next = null;
  }
  // update the length of list
  this.length++;
};

var dll = new DoubllyLinkedList();
dll.insert(1);
dll.insert(2);
dll.insert(3);
dll.insert(4);

console.log(dll);
