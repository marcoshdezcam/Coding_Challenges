enum StartPos {
  Beginning,
  End,
}

function pageCount(n: number, p: number): number {
  // Write your code here
  let totalPages: number = n,
    pageObjective = p,
    minPagesToTurn = 0;
  let startFrom: StartPos =
    pageObjective < Math.floor(totalPages / 2)
      ? StartPos.Beginning
      : StartPos.End;

  if (startFrom === StartPos.Beginning) {
    minPagesToTurn = Math.floor(pageObjective / 2);
    console.log({
      "Starging from": startFrom,
      minPagesToTurn,
    });
  } else if (startFrom === StartPos.End) {
    minPagesToTurn = Math.floor((totalPages - pageObjective) / 2);
    console.log({
      "Starging from": startFrom,
      minPagesToTurn,
    });
  }

  return minPagesToTurn;
}

console.log(pageCount(7, 3));
console.log(pageCount(5, 4));
