function binarySearch(numbers: number[], target: number) {
  /*
    TODO: 
      - Write a function that accepts a sorted array of integers and a number. 
    * RETURN:
    *  Return the index of that number if present. 
    *  The function should return -1 for target values not in the array.
    * EXAMPLE:
    * search([1, 3, 6, 13, 17], 13); // -> 3
    * search([1, 3, 6, 13, 17], 12); // -> -1
  */
  /*
    ? Solution 1 (Not optimal): 
      Go trough the whole array and check if target is equal to the current element.
    ! => Time complexity: O(n) => Linear
      Since we’re going through the whole array,
    ! => Space complexity: O(1) => Constant
      Since we store a set number of variables
 */
  /*
    ? Solution (Sorted Search)
      - Ensure the target is within range of the array, return false if not.
      - LOOP through the array
        - IF the target is equal to the values at the begining and end of our array RETURN the index.
        - COMPARE the target to the value at the middle of the array.
          IF it´s smaller than the middle value, we know the target is in the first half of the array.
          IF it´s larger than the middle value, we know the target is in the second half of the array.
        - IF we find the target, return the index.
        - IF we don´t find the target, evetually startIndex is equaL to endIndex -1 
    
    ! => Time complexity: O(log n) => Logarithmic
      Since we’re dividing the array in half every time we loop through it.
    ! => Space complexity: O(1) => Constant
      Since we store a set number of variables
    
    ! If we have a solution with O(n ^ 2), it´s worth sorting the data.
    ! Sorting data would be an O(n * log(n)) operation. Once sorted, next steps are often linear of logarithmic.
 */
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  if (target < numbers[startIndex] || target > numbers[endIndex]) return -1;

  while (startIndex <= endIndex) {
    if (target === numbers[startIndex]) return startIndex;
    if (target === numbers[endIndex]) return endIndex;

    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target < numbers[middleIndex]) endIndex = middleIndex - 1;
    if (target > numbers[middleIndex]) startIndex = middleIndex + 1;

    if (target === numbers[middleIndex]) return middleIndex;
  }

  return -1;
}

function balancedBrackets(str: string): boolean {
  /*
    TODO: Given a string, return true if it contains all balanced parentheses (), curly-brackets {}, and square-brackets [].
    * EXAMPLE:
      isBalanced("(x + y) - (4)"); // -> true
      isBalanced("(((10 ) ()) ((?)(:)))"); // -> true
      isBalanced("[{()}]"); // -> true
      isBalanced("(50)("); // -> false
      isBalanced("[{]}"); // -> false
  */
  /*
    ? Solution
      - LOOP through the string
        - IF the current character is an opening bracket, push it into the openStack array.
        - IF the current character is a closing bracket, pop the last element from the openStack array.
          - IF the popped element is not the corresponding opening bracket, return false.
      - At the end of the loop, IF the openStack array is not empty, return false.
    ! => Time complexity: O(n) => Linear
      Every character is processed in a loop. Inside the loop, we perform only constant-time actions.
    ! => Space complexity: O(n) => Linear
      Characters are stored in an array, generally proportional to the size of the input.
  */
  let openStack = [];
  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) openStack.push(str[i]);
    if (closeBrackets.includes(str[i])) {
      const lastOpenBracket = openStack.pop();
      if (lastOpenBracket !== matchingBrackets[str[i]]) return false;
    }
  }

  return openStack.length === 0;
}

class QueueWithConstantTime {
  first: number;
  last: number;
  storage: {};

  constructor() {
    this.first = 0;
    this.last = 0;
    this.storage = {};
  }

  addToQueue(item: number) {
    this.storage[this.last] = item;
    this.last++;
  }

  removeFromQueue() {
    if (this.last > this.first) {
      const item = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return item;
    }
  }

  getSize(): number {
    return this.last - this.first;
  }
}

class QueueWithTwoStacks {
  enqueueStack: number[];
  dequeueStack: number[];

  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  addToQueue(item: number): void {
    this.enqueueStack.push(item);
  }

  removeFromQueue(): number {
    if (this.dequeueStack.length == 0) return this.dequeueStack.pop();

    while (this.dequeueStack.length > 0) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }

    return this.dequeueStack.pop();
  }
}

class QueueWithStack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  addToQueue(...items: number[]): void {
    this.stack.push(...items);
  }

  removeFromQueue(): number {
    if (this.stack.length === 0) return undefined;
    if (this.stack.length === 1) return this.stack.pop();

    if (this.stack.length > 1) {
      const lastItem = this.stack.pop();
      const firstItem = this.removeFromQueue();
      this.addToQueue(lastItem);
      return firstItem;
    }
  }
}
