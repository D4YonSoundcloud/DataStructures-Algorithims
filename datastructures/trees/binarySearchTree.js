//what is a tree?
//a data structure that consists of nodes in a parent/child relationship
//root is the top most node
//nodes can reference multiple nodes which can reference other nodes, etc
//trees are nonlinear, compared to list which are linear
//nodes can only point to a child
//NOT a parent/child relationship
//can only have one root
//child is a node directly connected to another node when moving away from the root
//siblings have the same parents
//leaf have no children
//edge is the connection between one node and the other
//rule world uses HTML DOM, network routing,syntax tree, artifical intellegience
//folders in operating systems, JSON

//kinds of trees
//trees
//binary trees parents can only have two children
//binary search trees ( BST  ) || are sorted // every node left is always less than the right

class Node {
  constructor(val) {
    this.value = value;
    this.left = null;
    this.rignt = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    var count = 0;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else if (val === current.val) {
        count++;
        return undedefined;
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
}


var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(13);
tree.insert(8);

//Big O of BST
//insertion is O(logN) best and average case
//searching is O(logN)