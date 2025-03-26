// Create a new linked list that has all the methods in it.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addAtGivenPosition(value, position) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let index = 0;

    while (current.next !== null && index < position - 1) {
      current = current.next;
      index++;
    }
    if (current.next != null) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  deleteFromFront() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) return;
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  deleteByValue(value) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  print() {
    if (!this.head) return;
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result, "null");
  }
}


let list = new LinkedList();

list.push(1);
list.push(0);
list.append(2);
list.append(3);
list.append(5);

console.log("Priting list with only input op's: ");
list.print();

console.log("Adding the input at the mid op's: ");
list.addAtGivenPosition(4, 4)
list.print();

console.log("Removing the element from the front op's: ");
list.deleteFromFront();
list.print();

console.log("Removing the element from the mid op's: ");
list.deleteByValue(2);
list.print();

console.log("Removing the element from the End op's: ");
list.deleteFromEnd();
list.print();