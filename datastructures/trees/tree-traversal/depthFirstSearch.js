//visit every sibling node before looking at the children

//
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
      } else if (val > current.val) {
        current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  depthFirstSearchPreOrder() {
    var node = this.root(),
      data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return data;
  }

  depthFirstSearchInOrder() {
    var node = this.root(),
      data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(node);
    return data;
  }
}
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(11);
tree.insert(4);
tree.insert(9);
tree.depthFirstSearchPreOrder()
tree.depthFirstSearchPostOrder()
tree.depthFirstSearchInOrder()


//when to use BFS vs DFS || depends on length of the tree!
//time complexity is always the same
//space complexity of BFS could be much more if its an extremely large tree
//since we only have to keep track of a given node in a branch with DFS

//use cases for different variants
//if you want it to print the tree in order, then use the ||  inOrder || DepthFirst traversal
//preOrder can be used to "clone" or "export" a tree, so the tree structure can be easily reconstructed
