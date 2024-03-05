function pangrams(s: string): string {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const sentence: string[] = s.toLocaleLowerCase().replace(/ /g, "").split("");

  console.log(sentence);

  let found = alphabet.filter((letter) => sentence.includes(letter));
  console.log(found);
  console.log(found.length == alphabet.length);

  if (found.length == alphabet.length) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

const example1: string =
  "We promptly judged antique ivory buckles for the next prize";
const example2: string =
  "We promptly judged antique ivory buckles for the prize.";
const notPangram: string = "ab09";

console.log(pangrams(example2));
