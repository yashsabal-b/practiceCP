class Node {
  constructor(prev, data, next) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(data) {
    let newNode = new Node(null, data, this.head);
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }
  addToTail(data) {
    let newNode = new Node(this.tail, data, null);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
  traverseFromHead() {
    if (!this.head) return null;
    while (this.head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  traverseFromTail() {
    if (!this.tail) return null;
    while (this.tail) {
      console.log(this.tail.data);
      this.tail = this.tail.prev;
    }
  }
  removeFromHead() {
    if (!this.head) return null;
    let value = this.head.data;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return value;
  }
  removeFromTail() {
    if (!this.tail) return null;
    let value = this.tail.data;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return null;
  }
  peekAt(index) {
    let count = 0;
    while (this.head) {
      if (count == index) {
        console.log(this.head.data);
      }
      count++;
      this.head = this.head.next;
    }
    return null;
  }
  removeAt(index) {
    let count = 0,
      previous;
    if (count === 0) {
      this.head = this.head.next;
    } else {
      while (count < index) {
        count++;
        previous = this.head;
        this.head = this.head.next;
      }
      previous.next = this.head.next;
    }
  }
  deleteAll() {
    this.head = null;
    this.tail = null;
  }
}
