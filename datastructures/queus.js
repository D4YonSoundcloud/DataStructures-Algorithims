//uses a FIFO data strucutre, first in first out
//uses
//background task
//user priority
//uploading resources
//printing/task processing

var queue = [];

queue.push("First");
queue.shift();
queue.push("First");
queue.shift();

queue.unshift("first");
queue.pop();
queue.unshift("first");
queue.pop();

class Node {
  constructor() {
    (this.val = val), (this.next = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //enqueue
  push(val) {
    var newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //dequeue
  shift() {
      if (!this.first) return null;
      var temp = this.first;
    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp;
  }
}



//time complexity
//insertion and removal is O(1) compared to O(n) of an array
//searching and access is O(n) compared to O(1) of an array due to indexes
