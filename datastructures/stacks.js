//LIFO sstrucutre, last in first out
//used for mangaing function invocations
//undo/redo
//routing(the history object)
//many ways to build a stack
//we are going to use the built in arrays in javascript

var stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

stack.pop();

//using pop and push on an array is how you use an array as a stack

stack = [];

stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");
stack;
stack.shift();
stack.shift();
stack.shift();

//time complexity is not very good if using array for a stack;

//if you have to use an array, push and pop are better options since you dont have to give new indexes to every index

class Node {
  constructor() {
    (this.val = val), (this.next = null);
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //removes the first item in the list and updates the next value to be the head
  pop() {
    if (!this.first) return null;
    var currentFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return currentFirst.value;
  }

  //adds a new node at the beginning of a singlyLinkedList and moves the current head over to the next node
  push(val) {
    var newFirst = new Node(val);
    if (!this.first) {
      this.first = first;
      this.last = first;
    } else {
      newFirst.next = this.first;
      this.first = newFirst;
    }
    return ++this.size;
  }
}

//big O of stacks
//with linked list
//insertion and removal are O(1)
//searching and access is O(n), you should use an array or something since stacks have no index

