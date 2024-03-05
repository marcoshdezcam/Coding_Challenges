function detectCycle(head) {
  // Initialize both pointers to head
  let fast = head,
    slow = head;

  // Move fast twice as fast as slow while both exist
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // IF they meet, there is a cycle
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
