// https://www.youtube.com/watch?v=cob_kM0PJMo good video to watch for how to do basic linked list
// https://www.youtube.com/watch?v=3OsxH-huRc4&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=47 also good, has a bunch of short videos for different things
// list = [*Head Node* data: A, next: node] -> [data: B, next: node] -> [data: C, next: null] -> null
// each node has a "pointer" to the next node, in memory array values are all lined up in a row, in linkedlist they can be scattered

// prettier-ignore
class Node {
  constructor(data) {
    this.data = data, 
    this.next = null;
  }
}

// prettier-ignore
class LinkedList {
  constructor() {
    this.head = null, 
    this.length = 0;
  }

  // add new node to end of list
  appendNode(data) {
    const node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // add new node to beginning of list
  prependNode(data) {
    const node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  insert(data, index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) this.prependNode(data);
    else {
      const node = new Node(data);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.length++;
    }
  }

  removeAtIndex(index) {
    let removedNode;
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      // should point to null
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.length--;
    return removedNode;
  }

  removeNodeWithData(value) {
    if (this.length === 0) return null;
    if (this.head.data === value) {
      this.head = this.head.next;
      this.length--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.data !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.length--;
        return value;
      }
      return null; // no node deleted because node w/ value not found
    }
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  checkListSize() {
    return this.length;
  }

  headValue() {
    return this.head.data;
  }

  tailValue() {
    if (this.length === 0) return null;
    if (this.length === 1) return this.head.data;
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      return current.data;
    }
  }

  printList() {
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += `[${current.data}] -> `;
      current = current.next;
    }
    listValues += `null`;
    console.log("LINKED LIST VALUES: head -> ", listValues);
  }
}

const list = new LinkedList();
list.appendNode("A");
list.appendNode("B");
list.appendNode("C"); // A B C
console.log(list.contains("A")); // true
console.log(list.contains("J")); // false
console.log(list.checkListSize()); // 3
list.prependNode("X");
list.prependNode("Y");
list.prependNode("Z"); // Z Y X A B C
list.insert("1", 0);
list.insert("2", 3); // 1 Z Y 2 X A B C
list.removeAtIndex(1);
list.removeAtIndex(1);
list.removeAtIndex(2); // 1 2 A B C
list.removeNodeWithData("1");
list.removeNodeWithData("A"); // 2 B C
console.log(list.headValue()); // 2
console.log(list.tailValue()); // C
list.printList(); // Linked List Values: head -> [2] -> [B] -> [C] -> null