// https://www.youtube.com/watch?v=-ZMm8xX-Vrs tutorial

// binary tree = tree data structure where each node has at most two children, left child and right child
// binary search tree = binary tree where, value of each left node must be smaller than the parent node,
//    value of right node must be greater than the parent node, no child nodes points to null
// Example
//           [10]                       10 = root
//     [5]            [15]              15 = leaf/node
// [3]     [7]  [null]    [null]        10, 5, 3 = branch

// Tree Traversal - visiting every node in the tree
// Depth First Search (DFS) - starts at root node and explores as far as possible along each branch before backtracking,
//    Types: preorder, inorer, postorder
// Breadth First Search (BFS) - explore all nodes at present depth prior to moving on to nodes at next depth level

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode); // recursive
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode); // recursive
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value); // recursive
      } else {
        return this.search(root.right, value); // recursive
      }
    }
  }

  // Transversal Depth First Search (DFS) --------------------------------------------------------------------------------------------------
  // read data of node, visit left subtree, visit right subtree
  preOrderDFS(root) {
    if (root) {
      console.log(root.value);
      this.preOrderDFS(root.left); // recusive
      this.preOrderDFS(root.right); // recursive
    }
  }

  // visit left subtree, read data of node, visit the right subtree
  inOrderDFS(root) {
    if (root) {
      this.inOrderDFS(root.left);
      console.log(root.value);
      this.inOrderDFS(root.right);
    }
  }

  // visit the left subtree, visit the right subtree, read the data of the node
  postOrderDFS(root) {
    if (root) {
      this.postOrderDFS(root.left);
      this.postOrderDFS(root.right);
      console.log(root.value);
    }
  }

  // Transversal Breath First Search (BFS) ------------------------------------------------------------------------------------------------
  // level by level, using a queue to visit all nodes at one depth before moving to the next
  levelOrderBFS() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  // left most leaf node
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left); // recursive
    }
  }

  // right most leaf node
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right); // recursive
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value); // relies on recursion
  }

  // actually removes node from tree
  deleteNode(root, value) {
    if (root === null) {
      return root; // return root instead of null to insure recursion works
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // leaf node with no children
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        let tempValue = this.min(root.right); // Get minimum value in the right subtree

        // Copy the inorder successor's value to this node
        root.value = tempValue;

        // Delete the inorder successor
        root.right = this.deleteNode(root.right, tempValue);
      }
      return root;
    }
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree = new BinarySearchTree();

console.log(tree.isEmpty()); // true
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.search(tree.root, 10)); // true
console.log(tree.search(tree.root, 5)); // true
console.log(tree.search(tree.root, 15)); // true
console.log(tree.search(tree.root, 3)); // false
tree.insert(3);
tree.insert(7);
// Example
//           [10]
//     [5]          [15]
// [3]     [7]
tree.preOrderDFS(tree.root); // 10, 5, 3, 7, 15
tree.inOrderDFS(tree.root); // 3, 5, 7, 10, 15
tree.postOrderDFS(tree.root); // 3, 7, 5, 15, 10
tree.levelOrderBFS(tree.root); // 10, 5, 15, 3, 7
console.log(tree.min(tree.root)); // 3
console.log(tree.max(tree.root)); // 15
prettyPrint(tree.root);
//   ┌── 15
//  10
//   │   ┌── 7
//   └── 5
//       └── 3

// STOPS WORKING AFTER DELETING --------------------------------------------------------------------------------------
// tree.delete(3)



