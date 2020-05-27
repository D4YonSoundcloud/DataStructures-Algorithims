class BinaryTree {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }

  //time complexity is O(n) where n is the length of the tree;
  //space complexity is O(d) due to only needing to be put on the call stack for every level of the tree, not at every node;
  invertBinaryTree(tree) {
    if (tree === null) return;
    swapTree(tree);
    this.invertBinaryTree(tree.left);
    this.invertBinaryTree(tree.right);
  }

  swapTree(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
  }
}
