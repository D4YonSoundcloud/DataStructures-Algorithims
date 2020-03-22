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

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visit = {};
    let vtx;
    visit[start] = true;

    while (queue.length) {
      vtx = queue.shift();
      result.push(vtx);

      this.adjacendcyList[vtx].forEach(neighbor => {
        if (!visit[neighbor]) {
          visit[neighbor] = true;
          queue.push[neighbor];
        }
      });
    }

    return result;
  }
}
