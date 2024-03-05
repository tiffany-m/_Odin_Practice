// https://www.youtube.com/watch?v=-ZMm8xX-Vrs tutorial

// binary tree = tree data structure where each node has at most two children, left child and right child
// binary search tree = binary tree where, value of each left node must be smaller than the parent node,
//    value of right node must be greater than the parent node, no child nodes points to null
// Example
//           [10]                       10 = root
//     [5]            [15]              15 = leaf/node
// [3]     [7]  [null]    [null]        10, 5, 3 = branch

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
        this.insertNode(root.left, newNode); // recursive
      }
    }
  }

  search(root, value) {
    if(!root) {
      return false;
    } else {
      if(root.value === value) {
        return true;
      } else if(value < root.value) {
        return this.search(root.left, value) // recursive
      } else {
        return this.search(root.right, value) // recursive
      }
    }
  }
}

const tree = new BinarySearchTree();

console.log(tree.isEmpty()); // true
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.search(tree.root, 10)) // true
console.log(tree.search(tree.root, 5)); // true
console.log(tree.search(tree.root, 15)); // true
console.log(tree.search(tree.root, 3)); // false



