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
}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");