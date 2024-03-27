//  https://www.youtube.com/watch?v=bLtm94mvfjE
// graph:  node/vertex, conected by edge/line
// undirected: good for social network, could have user/node, if user is friends with another used that could be an edge, conntections go both ways
// directed: edges link one node to another but they are one way connections, edges can link both ways, example would be map,
//    street could be one way or two way
//  NOTE: path between two vertices with the fewest edges a shortest path, path goes from a particular vertex back to itself, that's a cycle

// adjacency matric: is a 2D array of size V x V where V is num of vertices/nodes in graph, each row and col represent a vertex/node, if the value of
//    any element say, matrix[i][j], it represents that there is an edge connecting vertex i and j
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
];

// A ---> B ---> C

//   A B C
// A 0 1 0
// B 1 0 1
// C 0 1 0

console.log(matrix[0][1]); // 1, A ---> B
console.log(matrix[1][2]); // 1, B ---> C
console.log(matrix[0][0]); // 0, A does not contain a self loop

// adjacency list: vertices/nodes are stored in map like data structure, every vertex/node stores a list of its adjacent vertices

const list = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"]
};

// A ---> B ---> C

// A ---> B
// B ---> A, C
// C ---> B

console.log(list["A"]); // ['B']
console.log(list["B"]); // ['A', 'C']

// ----------------------------------------------------------------------------------------------------------------------------------------------------
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // vertex/node
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set(); // constructor that creates a new Set object, collection of unique values, automatically removes duplicates
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2); // .add is method on Set data structure
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1) // .has is method on Set data structure
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
      delete this.adjacencyList[vertex]; // delete keyword is used to remove a property from an object.
    }
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display(); // 'A -> B', 'B -> A,C', 'C -> B' .... A -> B -> C
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.hasEdge("A", "C")); // false

console.log(graph); // Graph
//                        {adjacencyList:
//                            { A: Set { 0: "B"}},
//                            B: Set {0: "A", 1: "C"},
//                            C: Set {0: "B"}}}

graph.removeEdge("A", "B");
graph.display(); // A ->, B -> C, C -> B

graph.removeVertex("B");
graph.display(); // A ->, C ->

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/pc/challenge-implement-breadth-first-search
let Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
let doBFS = function(graph, source) {
    let bfsInfo = [];

    for (let i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    let queue = new Queue();
    queue.enqueue(source);

// Traverse the graph

    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //  
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    //
    //  Hint:
    //  use graph to get the neighbors,
    //  use bfsInfo for distances and predecessors 
        while (!queue.isEmpty()) {
          // pop queue item into vertex variable
          var vertex = queue.dequeue();

          // iterate through vertex subarray in graph
          for (var u = 0; u < graph[vertex].length; u++) {
            // set neighbor var to be the current index iteration
            var neighbor = graph[vertex][u];

            // check if neighbor has been visited
            if (bfsInfo[neighbor].distance === null) {
              // add 1 to the distance of current vertex, then set for neighbor
              bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
              // origin for the current vertex
              bfsInfo[neighbor].predecessor = vertex;
              queue.enqueue(neighbor);
            }
          }
        }

    return bfsInfo;
};

let adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
let bfsInfo = doBFS(adjList, 3);
for (let i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
