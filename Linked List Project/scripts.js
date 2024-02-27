// https://www.youtube.com/watch?v=cob_kM0PJMo good video to watch for how to do basic linked list
// list = [*Head Node* data: A, next: node] -> [data: B, next: node] -> [data: C, next: null] -> null

//   - LinkedList class / factory, which will represent the full list.
//   - Node class / factory, containing a value property and a link to the nextNode, set both as null by default.

//   Build the following functions in your linked list class / factory:

//  - append(value) adds a new node containing value to the end of the list
//  - prepend(value) adds a new node containing value to the start of the list
//  - size returns the total number of nodes in the list
//  - head returns the first node in the list
//  - tail returns the last node in the list
//  - at(index) returns the node at the given index
//  - pop removes the last element from the list
//  - contains(value) returns true if the passed in value is in the list and otherwise returns false.
//  - find(value) returns the index of the node containing value, or null if not found.
//  - toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

class Node {
  constructor(data) {
    this.data = data, 
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null, 
    this.length = 0;
  }
  append(data) {
    const node = new Node(data);

    // if list is empty, make first node the head
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      // keep iterating until you find the last node in list, add new node end of list
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }
}

const list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
console.log(list);
console.log(list.length);
console.log(list.contains("A"));
