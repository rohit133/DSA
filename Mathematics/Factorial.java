package Mathematics;

public class Factorial {
    
    public static int findFactorial(int num) {
        // Calculting Factorail using itration method.

        int res = 1;
        for (int i = 2; i <= num; i++)
            res = res * i;
        return res;
    }

    public static int RecursiveFactorial(int num) {
        // Calculting Factorail using recursive method.
        
        if (num == 0)
            return 1;
        return (num * RecursiveFactorial(num - 1));
    }

    public static void main(String[] args) {
        System.err.println(findFactorial(100));
        System.err.println(RecursiveFactorial(100));

    }
}
