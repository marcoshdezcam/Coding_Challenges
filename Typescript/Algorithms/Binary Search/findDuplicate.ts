function findDuplicates(nums: number[]): number {
  if (!nums || nums.length === 0) return -1;
  let left: number = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle: number = left + Math.floor((right - left) / 2);

    if (nums[middle] === nums[middle - 1]) return nums[middle];
    if (nums[middle] > middle) {
      left = middle;
    } else {
      right = middle;
    }
  }
}

const testArray2: number[] = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findDuplicates(testArray2));
