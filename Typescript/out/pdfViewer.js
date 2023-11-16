function designerPdfViewer(h, word) {
    // Write your code here
    const alphabet = [
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
    let heightsMap = new Map();
    for (let letter = 0; letter < h.length; letter++) {
        heightsMap.set(alphabet[letter], h[letter]);
    }
    let highestLetter = 0;
    for (let index = 0; index < word.length; index++) {
        console.log(heightsMap.get(word[index]));
        if (heightsMap.get(word[index]) > highestLetter) {
            highestLetter = heightsMap.get(word[index]);
        }
    }
    const selectionArea = highestLetter * word.length;
    return selectionArea;
}
//# sourceMappingURL=pdfViewer.js.map