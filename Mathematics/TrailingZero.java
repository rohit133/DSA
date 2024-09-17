package Mathematics;

public class TrailingZero {
    
    public static int countZero(int num) {
        // Navie approce for counting the traling zeros.

        int fact = Factorial.findFactorial(num);
        int rem = 0;
        while (fact % 10 == 0) {
            rem++;
            fact = fact / 10;
        }
        return rem;
    }

    public static int countZeroEff(int num) {
        // Optimied approce for counting the traling zeros.
        int result = 0;
        for (int i = 5; i <= num; i = i * 5)
            result = result + (num / i);
        return result;
    }

    public static void main(String[] args) {
        System.err.println(countZero(10));
        System.err.println(countZeroEff(1000));
    }

}
