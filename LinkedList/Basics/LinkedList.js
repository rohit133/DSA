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
  
  /**
   * @param {Number} value
   * @returns add the a new node in front of the list.
   */
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

  /**
   *
   * @param {Number} value
   * @param {index} position
   * @returns add a node in between the given position.
   */
  addAtPosition(value, position) {
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

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }
    if (current !== null) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  /**
   *
   * @param {Number} value
   * @returns add a new node at the end of the list.
   */
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

  /**
   *
   * @returns Removes the node from the front of the list.
   */
  deleteFromFront() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  /**
   *
   * @param {Number} value
   * @returns Remove a specific value form the list.
   */
  deleteByValue(value) {
    if (!this.head) return;
    let current = this.head;

    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }
  /**
   *
   * @returns Remove the node from the end of the list.
   */

  deleteFromEnd() {
    if (!this.head) return;
    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  /**
   * @return Print all the node of the list.
   */
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
  /**
   * @return Print the value of the head.
   */
  printHead() {
    console.log("Value of head: ", this.head);
  }
}

let list = new LinkedList();

list.append(10);
list.append(12);
list.append(14);
list.append(16);
list.append(18);
list.append(20);
list.append(22);
list.append(24);
list.append(26);

console.log("Print befor the push op: ");
list.print();

console.log("Print after the push op: ");
list.push(9);
list.print();

console.log("Print after the deleted of 14 op: ");
list.deleteByValue(14);
list.print();

console.log("Print after the deleted from end  op: ");
list.deleteFromEnd();
list.print();

// list.printHead();
// list.printCurrent()
