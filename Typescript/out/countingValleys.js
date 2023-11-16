function countingValleys(steps, path) {
    let letters = path.split("");
    let valleys = 0;
    let hikeUp = [];
    let hikeDown = [];
    letters.forEach((letter) => {
        letter == "U" ? hikeUp.push(letter) : hikeDown.push(letter);
        if (hikeUp.length == hikeDown.length) {
            letter == "U" ? valleys++ : null;
        }
    });
    //? Return number of valleys traversed
    return valleys;
}
//# sourceMappingURL=countingValleys.js.map