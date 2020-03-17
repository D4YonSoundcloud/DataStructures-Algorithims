//what is?
//similiar to binary search tree but with diff rules
//in a MaxBinaryHeap, parents nodes are always larger than the child nodes
//as compact as possible
//all the children nodes are as full as they can be and left children are filled out first
//in a MinBinaryHeap, parent nodes are always smaller than the child nodes
//   41               50
//  /  \             /  \
// 21   45         41    45
// /\     \       / \    /
//2  4    50     21  2  4
//what are they used in?
//used in priority queues and graph traversal algorithims

//math need
//for index of an array n...
//the left child is stored at 2n + 1
//the right child is at 2n + 2
//if we have a child and want to know its parents, we can use
//for index of an array n...
//the parent is at index (n-1)/2 floored

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //adding to a MBH
  //add to the end, and then bubble up (swap until its at where it needs to be)
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    var values = this.values;
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      if (values[index] <= values[parentIndex]) break;
      values[parentIndex] = values[index];
      values[index] = values[parentIndex];
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (!this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
      return max;
    } else {
      return undefined;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

}
