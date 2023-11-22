function designerPdfViewer(h: number[], word: string): number {
  // Write your code here
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let heightsMap = new Map<string, number>();

  for (let letter = 0; letter < h.length; letter++) {
    heightsMap.set(alphabet[letter], h[letter]);
  }

  let highestLetter: number = 0;
  for (let index = 0; index < word.length; index++) {
    console.log(heightsMap.get(word[index]));
    if (heightsMap.get(word[index]) > highestLetter) {
      highestLetter = heightsMap.get(word[index]);
    }
  }

  const selectionArea: number = highestLetter * word.length;
  return selectionArea;
}
