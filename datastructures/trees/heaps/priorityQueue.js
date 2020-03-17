class Node {
  constructor() {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //add to the end, and then bubble up (swap until its at where it needs to be)
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    var values = this.values;
    var index = this.values.length - 1;
    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      if (values[index].priority <= values[parentIndex].priority) break;
      values[parentIndex] = values[index];
      values[index] = values[parentIndex];
      index = parentIndex;
    }
  }

  deqeue() {
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
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

let ER = new PriorityQueue();
ER.Enqueue("common cold", 1);
ER.Enqueue("gunshot wound", 2);
ER.Enqueue("lsot limb", 3);


//time complexity 
//Insertion - O(logN)
//Removal - O(logN)
//Search - O(N) use a binarySearchTree instead
//search - technically O(N/2)
