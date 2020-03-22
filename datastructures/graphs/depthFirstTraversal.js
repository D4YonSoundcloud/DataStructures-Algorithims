//visit children before we visit siblings

class Graph {
  constructor() {
    this.adjacendcyList = {};
  }

  addVertex(vtx) {
    this.adjacendcyList[vtx] = [];
  }

  addEdge(vtx1, vtx2) {
    this.adjacendcyList[vtx1].push(vtx2);
    this.adjacendcyList[vtx2].push(vtx1);
  }

  removeEdge(vtx1, vtx2) {
    this.adjacendcyList[vtx1] = this.adjacendcyList[vtx1].filter(
      v => v !== vtx2
    );
    this.adjacendcyList[vtx2] = this.adjacendcyList[vtx2].filter(
      v => v !== vtx1
    );
  }

  removeVertex(vtx) {
    while (this.adjacendcyList[vtx].length) {
      const adjacendcyVtx = this.adjacendcyList[vtx].pop();
      this.removeEdge(vtx, adjacendcyVtx);
    }
    delete this.adjacendcyList[vtx];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacendcyList = this.adjacendcyList;
    function dfs(vtx) {
      if (!vtx) return null;
      visited[vtx] = true;
      result.push(vtx);
      adjacendcyList[vtx].forEach(neighbor => {
        if (!visit[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visit = {};
    let vtx;

    visit[start] === true;

    while (stack.length) {
      console.log(stack)  
      let vtx = stack.pop();
      result.push[vtx];

      this.adjacendcyList[vtx].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
