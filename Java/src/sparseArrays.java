import java.util.*;

class sparseArrays {
  public static void main(String[] args) {
    List<String> strings = new ArrayList<String>(Arrays.asList("aba", "baba","aba","xzxb"));
    List<String> queries = new ArrayList<String>(Arrays.asList("aba","xzxb","ab"));
    List<Integer> result = solution(strings, queries);
    System.out.println(result);
  }
  
  static List<Integer> solution(List<String> strings, List<String> queries) {
    // Write your code here
    List<Integer> result = new ArrayList<Integer>();
    for (String query : queries) {
      Integer counter = 0;
      for (String string : strings) {
        if (string.equals(query)){
          counter++;
        }
      }
      result.add(counter);
    }

    return result;
  }
}
