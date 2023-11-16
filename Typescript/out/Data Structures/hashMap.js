const fruitFlavors = {
    apple: 8,
    banana: 6,
    cherry: 9,
    durian: 10,
    elderberry: 4,
    fig: 7,
};
console.log(fruitFlavors["apple"]);
let myMap = new Map([
    ["apple", 8],
    ["banana", 6],
    ["cherry", 9],
    ["durian", 10],
    ["elderberry", 4],
    ["fig", 7],
]);
myMap.set("apple", 8);
console.log(myMap.get("apple"));
//# sourceMappingURL=hashMap.js.map