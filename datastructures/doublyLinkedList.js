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
    if (index == 0) return this.hea;
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

  set(val, index) {
    if (index < -1 || index > this.length) return false;
    if (index === 0) return !!(this.head.val = val);
    if (index === this.length) return !!(this.tail.vail = val);
    let node = this.get(index);
    node ? (node.val = value) : false;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var old = this.get(index);
    var prev = old.prev;
    prev.next = newNode;
    old.prev = newNode;
    newNode.next = old;
    newNode.prev = prev;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();
    var foundNode = this.get(index);
    var prev = foundNode.prev;
    var after = foundNode.next;
    prev.next = after;
    after.prev = before;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}

// big O of doubly Linked List
//insertion is O(1)
//removal is O(1)
//Searching - O(n) techincally O(n/2) but thats still O(n)
//Access - O(n)

//doublyLinkedList have extra pointers, makes things like working backwards much easier. things like browser history (every page has a next and a previous)
//they can take up much more memory
//better for finding nodes (can be done in half the time)
