### Binary Search Trees

-  it is a data structure in computer science.
-  it has a non-linear insertion algorithm.
-  it has a node.
-  each node contains some data as well as two pointers to other nodes. 
-  these pointers are called left and right.
-  example

	```
	var node = {
		value: 1,
		left:null,
		right: null
	};
	
	```
	
- it is originized in tree structure, as you can infer from the name. 
- the first item is the root node. 
- each node that is added to tree, after the root node, is a child or ancestor of the root node. 
- nodes are ordered based on the value they contain. 
- Nodes on the left side (left sub tree) are always less than to the node of the tree. 
- Nodes on the right side (right sub tree) are always greater than the node of the tree. 
- There are no duplicates in the binary search tree. 


### Complexity
 - Average
 	- space `O(n)`
 	- insertion `O(log n)`
 	- search `O(log n)`

 - Worst
 	- space `O(n)`
 	- insertion `O(n)`
 	- search `O(n)`