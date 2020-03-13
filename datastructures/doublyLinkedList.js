class Node {
  constructor() {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    var currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null; //chops connection to next node
      currentTail.prev = null; // chops connection to prev node
    }
    this.length--;
    return currentTail;
  }
  shift() {
    if (!this.head) return false;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < -1 || index > this.length) return undefined;
    if (index == 0) return this.hea ;
    if (index === this.length) return this.tail;
    if (index >= this.length / 2) {
      for (i = 0; i <= index; i++) {
        var current = this.head;
        current.next;
      }
    } else {
      for (i = this.length - 1; i > index; i--) {
        var current = this.tail;
        current.prev;
      }
    }
    return current;
  }
}
