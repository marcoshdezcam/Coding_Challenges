function findMiddleLinkedList(head) {
    let slow = head, fast = head;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
//# sourceMappingURL=middleLinkedList.js.map