function countingSort(arr: number[]): number[] {
  const occurrences: number[] = Array(100).fill(0);

  for (const index in arr) {
    console.log(arr[index]);
    occurrences[arr[index]]++;
  }

  return occurrences;
}

const arr: number[] = [1, 1, 3, 2, 1];
const occurrencesResult: number[] = countingSort(arr);
console.log(occurrencesResult);
