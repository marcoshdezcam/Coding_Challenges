#include <iostream>
#include <string>

using namespace std;

string timeConversion(string s){
  const int hours = stoi(s.substr(0, 2));
  const string timeOfDay = s.substr(s.length() -2, s.length());
  string convertedTime = "";
  
  if (timeOfDay == "AM"){
    hours == 12 ? convertedTime = "00" + s.substr(2, 6): convertedTime = s.substr(0, 8);
  } else if (timeOfDay == "PM"){
    hours == 12 ? 
      convertedTime = s.substr(0, 8) : 
      convertedTime = to_string(hours + 12) + s.substr(2, 6);
  }

  return convertedTime;
}

int main(){
  const string originalTime = "08:05:45PM";
  const string convertedTime = timeConversion(originalTime);
  cout << "Original time: " << originalTime << endl;
  cout << "Converted time: " << convertedTime << endl;

  return 0;
}
