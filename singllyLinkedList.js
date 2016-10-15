/*
constructor class for node
*/

var Node = require('./Node');


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

SinglyLinkedList.prototype.delete = function(index){
  // check if index is within range
	var currentNode = this.head;
	var prevNode;
	var i =0;

	if(index > -1 && index < this.length){
		// check if the deletion for head
		if(index === 0){
			this.head = currentNode.next;
		}
		else{
			// traverse the list till you reach the desired node
			while (i < index){
				prevNode = currentNode;
				currentNode = currentNode.next;
				i++;
			}
			// delete by skipping over
			prevNode.next = currentNode.next;

		}
		// update the length
		this.length--;
	}
	else{
		return;
	}
}

module.exports = SinglyLinkedList;
