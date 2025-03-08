class Node_LinkedList {
  value: number | string;
  next: Node_LinkedList | null;
  constructor(data: number | string) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  head: Node_LinkedList | null;
  constructor() {
    this.head = null;
  }

  append(value: number | string) {
    const newNode: Node_LinkedList = new Node_LinkedList(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode: Node_LinkedList = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  prepend(value: number | string) {
    const newNode: Node_LinkedList = new Node_LinkedList(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(value: number | string) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let currentNode: Node_LinkedList = this.head;
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.next) currentNode.next = currentNode.next.next;
  }

  print() {
    let currentNode: Node_LinkedList = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({
      "Current List: ": values.join(` => `),
    });
  }
}

const newList = new LinkedList();
newList.append(1);
newList.append(10);
newList.prepend(0);
newList.prepend(20);
newList.append(30);
newList.print();
newList.remove(10);
newList.print();

console.log(newList);
