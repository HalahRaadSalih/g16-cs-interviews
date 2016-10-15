var Node = require('./Node');

var Stack = function(){
  this.top = null;
}

Stack.prototype.push = function(val){
  var newNode = new Node(val);
  this.top = newNode;
}

Stack.prototype.pop = function(){
  var item = this.top;
  this.top = top.next;

  return item;
}

Stack.prototype.isEmpty = function(){
  return this.top === null
}

Stack.prototype.peek = function () {
  if(!this.isEmpty()){
    return this.top.val;
  }

  return null;
};
module.export = Stack;
