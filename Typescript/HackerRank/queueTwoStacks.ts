function queueTwoStacks(inputLines: string[]) {
  // Extract number of queries from inputLines[0]
  const numberOfQueries: number = Number(inputLines[0]);
  let numbersQueue: number[] = [];

  // Iterate trough inputLines from 1 to inputLines[0] = 10
  for (let index = 1; index <= numberOfQueries; index++) {
    // '1 42' => inputLines[i].split(" ")
    let query: number[] = inputLines[index].split(" ").map((item) => {
      return Number(item);
    });

    // IF 1 Enqueue element
    if (query[0] == 1) {
      numbersQueue.unshift(query[1]);
    }
    // IF 2 Dequeue element
    if (query[0] == 2) {
      numbersQueue.pop();
    }
    // IF 3 PRINT element
    if (query[0] == 3) {
      console.log(numbersQueue[numbersQueue.length - 1]);
    }
  }
}
