enum StartPos {
  Beginning,
  End,
}

function pageCount(n: number, p: number): number {
  // Write your code here
  let totalPages: number = n,
    pageObj = p,
    minPagesToTurn = 0;
  let startFrom: StartPos =
    pageObj < Math.floor(totalPages / 2) ? StartPos.Beginning : StartPos.End;

  if (startFrom === StartPos.Beginning) {
    minPagesToTurn = Math.floor(pageObj / 2);
  } else if (startFrom === StartPos.End) {
    minPagesToTurn = Math.floor((totalPages - pageObj) / 2);
  }

  return minPagesToTurn;
}
