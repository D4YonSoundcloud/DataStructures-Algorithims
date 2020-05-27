class BST {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }

  //time complexity = O(n) where is the number of nodes in the tree
  //space complexity = o(d) where d is the depth of the tree
  validateBst(tree) {
      //call helper function initiliazing the min and max vals
    validateBstHelper(tree, -Infinity, Infinity);
  }

  validateBstHelper(tree, minVal, maxVal) {
    //if the tree reaches its end then we now we have finished
    if (tree === null) return true;
    //if at any point any val of the tree is less than the minVal ||  greater/equal to the maxVal then break, not a valid bst 
    if (tree.val < minVal || tree.val >= maxVal) return false;
    //returns a const that is the entire left branch from the root of the tree;
    const leftIsValid = validateBstHelper(tree.left, minVal, tree.val);
    //returns the right side of the tree;
    return leftIsValid && validateBstHelper(tree.right, tree.val, maxVal);
  }
}
