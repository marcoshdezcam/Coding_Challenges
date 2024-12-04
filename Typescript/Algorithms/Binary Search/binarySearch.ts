function binarySearch(nums: number[], target: number): number {
  if (!nums || nums.length === 0) return -1;

  let left: number = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle: number = left + Math.floor((right - left) / 2);

    if (nums[middle] === target) return middle;
    if (target < nums[middle]) right = middle - 1;
    if (target > nums[middle]) left = middle + 1;
  }

  return -1;
}

const testArray: number[] = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(testArray, 9));
