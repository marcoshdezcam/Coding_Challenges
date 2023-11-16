function removeNthLastNode(head, n) {
    let left = head, right = head;
    // Move RIGHT N times
    for (let i = 0; i < n; i++) {
        right = right.next;
    }
    if (!right) {
        return head.next;
    }
    // Move RIGHT & LEFT to the end
    while (right.next != null) {
        left = left.next;
        right = right.next;
    }
    // LEFT is now before (N before end of list)
    left.next = left.next.next;
    return head;
}
//# sourceMappingURL=removeNfromList.js.map