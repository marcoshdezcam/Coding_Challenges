function sortedSearch(numbers: number[], target: number) {
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
    ! => Time complexity: O(n) Since we’re going through the whole array,
    ! => Space complexity: O(1) Since we store a set number of variables
 */
  /*
    ? Solution 2 (Sorted Search)
      - Ensure the target is within range of the array, return false if not.
      - LOOP through the array
        - IF the target is equal to the values at the begining and end of our array RETURN the index.
        - COMPARE the target to the value at the middle of the array.
          IF it´s smaller than the middle value, we know the target is in the first half of the array.
          IF it´s larger than the middle value, we know the target is in the second half of the array.
        - IF we find the target, return the index.
        - IF we don´t find the target, evetually startIndex is equaL to endIndex -1 
    
    ! => Time complexity: O(log n) Since we’re dividing the array in half every time we loop through it.
    ! => Space complexity: O(1) Since we store a set number of variables
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
