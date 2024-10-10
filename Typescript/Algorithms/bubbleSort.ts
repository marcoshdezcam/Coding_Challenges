function bubbleSort(arr: number[]) {
  let isSorted: boolean = false;
  do {
    arr.forEach((left, left_i) => {
      let right_i: number = left_i + 1,
        right = arr[right_i + 1];
      if (left > right) (arr[left_i] = right), (arr[right_i] = left);
    });
  } while (!isSorted);
}
