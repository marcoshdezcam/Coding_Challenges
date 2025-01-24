class MyNode {
  data: number;
  next: MyNode;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  head: MyNode;
  tail: MyNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  peek(): number {
    if (this.head === null) {
      throw new Error("Queue is empty");
    }
    return this.head.data;
  }

  add(data: number): void {
    const newNode = new MyNode(data);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (this.head === null) {
      this.head = newNode;
    }
  }

  remove(): number {
    if (this.head === null) {
      throw new Error("Queue is empty");
    }
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return data;
  }
}

class Stack {
  top: MyNode;

  constructor() {
    this.top = null;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  peek(): number {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }

  push(data: number): void {
    const newNode = new MyNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): number {
    if (this.top === null) {
      throw new Error("Stack is empty");
    }
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }
}
