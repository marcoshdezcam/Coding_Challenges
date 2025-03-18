export function singleMutation(str1: string, str2: string): boolean | number {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let mutations: number = 0;

  for (let i: number = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
    let char1: string = str1[i], char2 = str2[j];

    if (char1 !== char2) mutations++;
    if (mutations > 1) return false;
  }

  return true;

}
