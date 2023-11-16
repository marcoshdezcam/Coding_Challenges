class MyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        return this.head === null;
    }
    peek() {
        if (this.head === null) {
            throw new Error("Queue is empty");
        }
        return this.head.data;
    }
    add(data) {
        const newNode = new MyNode(data);
        if (this.tail !== null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (this.head === null) {
            this.head = newNode;
        }
    }
    remove() {
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
    constructor() {
        this.top = null;
    }
    isEmpty() {
        return this.top === null;
    }
    peek() {
        if (this.top === null) {
            throw new Error("Stack is empty");
        }
        return this.top.data;
    }
    push(data) {
        const newNode = new MyNode(data);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop() {
        if (this.top === null) {
            throw new Error("Stack is empty");
        }
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}
//# sourceMappingURL=queueAndStack.js.map