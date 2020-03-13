class Node {
  constructor() {
    (this.val = val), (this.next = null);
  }
}

class singlyLinkedListed {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push an item to the end of the singlyLinkedList
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //removes an node from the end singlyLinkedList and returns it
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //removes the first item in the list and updates the next value to be the head
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return currentHead;
  }

  //adds a new node at the beginning of a singlyLinkedList and moves the current head over to the next node
  unShift(val) {
    var newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //retrieves a node by its position in the linked list
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    for (i = 0; i !== index; i++) {
      current = current.next;
    }
    return current;
  }

  //sets val of node at index given
  set(val, index) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //gets a value and creates a new node and inserts that node
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    //                      changes it to a boolean to always return true or false
    if (index == 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var previousNode = this.get(index - 1);
    var temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //takes in an index and removes it
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    var prev = get(index - 1);
    var temp = prev.next;
    prev.next = temp.next;
    this.length--;
    return temp;
  }

  //prints
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  //reverses the singlyLinkedList
  reverse() {
    if (!this.head && !this.tail) return undefined;
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next = null;
    var prev = null;
    for (i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    //   prev = node;
    //   node = node.next;
    //   next = node.next;
    //   prev = next;
    //   prev.next = this.tail;
    }
    return this;
  }
}

//time complexity and space complexity
//insertion - O(1) vs array which is O(n)
//removal - it depends O(1) or O(n) depends on how far down the list you are trying to remove vs array which is at best O(n)
//Searching - worst case O(n) where n is the number of nodes vs array which is O(1)
//Access - O(n) where n is the number of nodes vs array which is O(1)

var list = new singlyLinkedListed();
list.push("YO");
console.log(list);
list.push("wassup");
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
list.push("done");
console.log(list);
list.unShift("yoooo");
console.log(list);
list.get(1);
list.set("dude", 1);
