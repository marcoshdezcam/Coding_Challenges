function subsetA(arr: number[]): number[] {
  let arrB: number[] = arr.sort((a: number, b: number) => {
    return b - a;
  });
  let arrB_sum: number = 0;
  arrB.forEach((value, _) => (arrB_sum += value));

  let arrA: number[] = [];
  let arrA_sum: number = 0;

  while (arrA_sum <= arrB_sum) {
    let currentVal: number = arrB.shift();
    arrA_sum = arrA_sum + currentVal;
    arrB_sum = arrB_sum - currentVal;
    arrA.push(currentVal);
  }

  return arrA.reverse();
}
