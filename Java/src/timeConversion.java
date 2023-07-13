class Result {
  public static String timeConversion(String s){
    String convertedTime = "";
    String timeOfDay = s.substring(s.length() - 2, s.length());
    String hours = s.substring(0, 2);
    
    if (timeOfDay.equals("AM")) {
      convertedTime = (hours.equals("12")) ? "00" + s.substring(2, s.length() - 2) : s.substring(0, s.length() - 2);
    } else if (timeOfDay.equals("PM")) {
     System.out.println("PM");
     convertedTime = (hours.equals("12")) ? s.substring(0, s.length() - 2 ) : String.valueOf(12 + Integer.valueOf(hours) + s.substring(2, s.length() - 2));
    }
    
    return convertedTime;
  }
}

public class timeConversion {
  public static void main(String[] args) {
    String result = Result.timeConversion("12:05:45PM");
    System.out.println(result);

  }
}
