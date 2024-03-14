//  https://www.youtube.com/watch?v=bLtm94mvfjE
// graph:  node/vertex, conected by edge/line
// undirected: good for social network, could have user/node, if user is friends with another used that could be an edge
// directed: edges link one node to another but they are one way connections, edges can link both ways, example would be map,
//    street could be one way or two way

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
