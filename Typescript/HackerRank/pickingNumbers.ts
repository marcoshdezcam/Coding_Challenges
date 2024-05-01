// URL: https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true
function isAbsDiffOneOrLess(a: number, b: number): boolean {
  let absoluteDifference: number = Math.abs(a - b);
  return absoluteDifference <= 1;
}

function isArrayEmpty(array: number[]): boolean {
  return array.length === 0;
}

type PickedArray = {
  // Array with items that match abs(a-b) = 1
  elements: number[];
  length: number;
};

function pickingNumbers(a: number[]): number {
  // Iterate the array
  let pickedArrays: number[][] = [[]];

  a.forEach((leftPointer, index) => {
    let pickedArray: number[] = [];
    let remainingItems: number[] = a.slice(index + 1);
    console.log({
      leftPointer,
      index,
      remainingItems,
    });

    remainingItems.filter((rightPointer, index) => {
      console.log({
        leftPointer,
        rightPointer,
      });
      if (isAbsDiffOneOrLess(leftPointer, rightPointer)) {
        // Add both numbers if pickedArray is empty
        isArrayEmpty(pickedArray)
          ? pickedArray.push(leftPointer, rightPointer)
          : // Add just right number if is not empty
            pickedArray.push(rightPointer);

        // SET LEFT POINTER TO NUMBER FOUND
        leftPointer = rightPointer;
      }
      console.log({
        pickedArray,
      });
    });
    pickedArrays.push(pickedArray);
  });
  console.log({
    pickedArrays,
  });

  return pickedArrays.length;
}
