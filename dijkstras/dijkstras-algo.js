//DIJoooooooooooooooooooooooooooooooo oooooooooooooooooooooooooKSTRAS ALGORITHIM


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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (this.adjacencyList[vtx]) this.adjacencyList[vtx];
  }

  addEdge(vtx1, vtx2, weight) {
    this.adjacencyList[vtx1].push({ node: vtx2, weight });
    this.adjacencyList[vtx2].push({ node: vtx1, weight });
  }

  //DIJKSTRAS ALGORITHIM
  dijkstras(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;

    //build up initial state
    for (let vtx in this.adjacencyList) {
      if (vtx === start) {
        distances[vtx] = 0;
        nodes.enqueue(vtx, 0);
      } else {
        distances[vtx] = Infinity;
        nodes.enqueue(vtx, Infinity);
      }
      previous[vtx] = null;
    }

    //as long there is something to visit
    while (nodes.values.length) {
      smallest = nodes.deqeue().val;
      if (smallest === end) {
        //we are done and need to build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
      }
      //CRUX OF ALGO vv
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    //doesnt have smallest and needs to be reversed;
    console.log(path);
    return path.concat(smallest).reverse();
  }
}
