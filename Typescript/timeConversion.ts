function timeConversion(s: string): string {
  // Write your code here
  const timeOfDay: string = s.slice(s.length - 2, s.length);
  const hours: number = Number(s.slice(0, 2));
  let convertedTime: string = "";
  
  
  if (timeOfDay == "AM"){
      hours == 12 ? convertedTime = "00" + s.slice(2, s.length - 2) : convertedTime = s.slice(0, s.length - 2);
  } else if (timeOfDay == "PM"){
      hours == 12 ? convertedTime = s.slice(0, s.length - 2) : convertedTime = String(12 + hours) + s.slice(2, s.length - 2);
  }
  
  
  return convertedTime;
}

const originalTime : string = "02:05:45AM";
const convertedTime : string = timeConversion(originalTime);
console.log(convertedTime);

