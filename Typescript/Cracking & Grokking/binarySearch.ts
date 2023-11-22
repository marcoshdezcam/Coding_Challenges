function findTargetBinarySearch(nums: number[], target: number): number {
  let start = 0,
    end = nums.length;
  let middle = nums.length / 2;

  //
  if (nums[middle] == target) return middle;

  // Target is less than middle element value, search on first half
  if (target < nums[middle]) {
    // Target is on left half, create left halft array
    const leftHalf = nums.slice(start, middle);
    console.log(leftHalf);
  } else {
    // Target is on right half
    const rightHalf = nums.slice(middle, end);
    console.log(rightHalf);
  }
  return -1;
}

const exampleBinarySearch: number[] = [1, 6, 8, 10];

console.log(findTargetBinarySearch(exampleBinarySearch, 10));
