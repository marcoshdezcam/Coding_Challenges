function insertPosition(nums: number[], target: number): number {
  if (!nums || nums.length === 0) return -1;

  let left: number = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle: number = left + Math.floor((right - left) / 2);

    if (target === nums[middle]) return middle;
    if (target < nums[middle]) right = middle - 1;
    if (target > nums[middle]) left = middle + 1;
  }

  if (target < nums[left + 1]) {
    return left;
  } else {
    return right;
  }
}

const testArray: number[] = [2, 4, 5, 9, 11];
console.log(insertPosition(testArray, 5));
