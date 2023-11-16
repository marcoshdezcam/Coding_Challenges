function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const sentence = s.toLocaleLowerCase().replace(/ /g, "").split("");
    console.log(sentence);
    let found = alphabet.filter((letter) => sentence.includes(letter));
    console.log(found);
    console.log(found.length == alphabet.length);
    if (found.length == alphabet.length) {
        return "pangram";
    }
    else {
        return "not pangram";
    }
}
const example1 = "We promptly judged antique ivory buckles for the next prize";
const example2 = "We promptly judged antique ivory buckles for the prize.";
const notPangram = "ab09";
console.log(pangrams(example2));
//# sourceMappingURL=pangrams.js.map