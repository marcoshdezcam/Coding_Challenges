import java.util.Scanner;
import java.io.*;
import java.util.*;

public class InOut {
    public static void main(String[] args) {
        int[] enteros = new int[3];

        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < enteros.length; i++) {
            enteros[i] = scanner.nextInt();
        }

        for (int item:enteros) {
            System.out.println(item);
        }
    }
}
