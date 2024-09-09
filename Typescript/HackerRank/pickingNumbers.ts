function absDiff(a: number, b: number): number {
  let absoluteDifference: number = Math.abs(a - b);
  return absoluteDifference;
}

function isArrayEmpty(array: number[]): boolean {
  return array.length === 0;
}

function sortArraysByLength(array: number[][]): number[][] {
  return array.sort((a, b) => b.length - a.length);
}

function arraysAreEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

type PickedArray = {
  // Array with items that match abs(a-b) = 1
  elements: number[];
  length: number;
};

function pickingNumbers(a: number[]): number {
  // Iterate the array
  let orderedArray: number[] = a.sort((a, b) => a - b);
  let pickedArrays: number[][] = [[]];

  orderedArray.forEach((leftPointer, index) => {
    let pickedArray: number[] = [];
    let remainingItems: number[] = a.slice(index + 1);
    console.log({
      leftPointer,
      index,
      remainingItems,
    });

    remainingItems.forEach((rightPointer, index) => {
      if (absDiff(leftPointer, rightPointer) <= 1) {
        isArrayEmpty(pickedArray)
          ? pickedArray.push(leftPointer, rightPointer)
          : pickedArray.push(rightPointer);

        // Set leftPtr to last item from pickedArray
        leftPointer = pickedArray[pickedArray.length - 1];
      }
      console.log({
        pickedArray,
      });
      // Saved picked arrays found
      pickedArrays.push(pickedArray);
    });
  });
  console.log({
    pickedArrays,
  });
  // sortArraysByLength(pickedArrays);
  // let longestPickedArray: number[] = pickedArrays[0];

  return pickedArrays[0].length;
}
