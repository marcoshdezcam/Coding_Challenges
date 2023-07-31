import java.util.*;

/**
 * lonelyInteger
 */
public class lonelyInteger {

  public static void main(String[] args) {
    List<Integer> list = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 3, 2, 1));
    int result = solution(list);
    System.out.println(result);
  }

  public static int solution(List<Integer> a) {
    int result = 0;
    for (int i = 0; i < a.size(); i++) {
      int occurrences = Collections.frequency(a, a.get(i));
      if (occurrences == 1) {
        result = a.get(i);
      }
    }
    return result;
  }
}