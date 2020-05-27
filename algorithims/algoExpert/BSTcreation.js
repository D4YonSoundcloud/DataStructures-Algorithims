class BST {
  constuctor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    let currentNode = this;
    while (true) {
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(val) {
    let currentNode = this;
    while (currentNode !== null) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  //parentNode keeps track of the parent node of the removed node
  remove(val, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (val < currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      //when the val to remove is found
      else {
        //if there are two children
        if (currentNode.left !== null && currentNode.right !== null) {
          //gets min val, a function we make
          currentNode.val = currentNode.right.getMinVal();
          currentNode.right.remove(currentNode.val, currentNode);
        }
        //if we have to remove the root node
        else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.val = currentNode.left.val;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.val = currentNode.right.val;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            //this is the only node, you do nothing
          }
        }
        //has only one or no child no, we check if it is left or right child itself;
        else if ((parentNode.left = currentNode)) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if ((parentNode.right = currentNode)) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinVal() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.val;
  }
}
