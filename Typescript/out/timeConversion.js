function timeConversion(s) {
    // Write your code here
    const timeOfDay = s.slice(s.length - 2, s.length);
    const hours = Number(s.slice(0, 2));
    let convertedTime = "";
    if (timeOfDay == "AM") {
        hours == 12 ? convertedTime = "00" + s.slice(2, s.length - 2) : convertedTime = s.slice(0, s.length - 2);
    }
    else if (timeOfDay == "PM") {
        hours == 12 ? convertedTime = s.slice(0, s.length - 2) : convertedTime = String(12 + hours) + s.slice(2, s.length - 2);
    }
    return convertedTime;
}
const originalTime = "02:05:45AM";
const convertedTime = timeConversion(originalTime);
console.log(convertedTime);
//# sourceMappingURL=timeConversion.js.map