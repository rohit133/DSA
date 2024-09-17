package Mathematics;

public class PrimeFactor {
    static void checkPrimeFactor(int num) {
        for (int i = 2; i < num; i++) {
            if (CheckPrime.checkPrimeNaive(i)) {
                int x = i;
                while (num % x == 0) {
                    System.out.println(i);
                    x = x * i;
                }
            }
        }
    }

    static void checkPrimeFactorEfficientMethod(int num) {
        if (num <= 1)
            return;
        for (int i = 2; i * i <= num; i++) {
            while (num % i == 0) {
                System.out.println(i);
                num = num / i;
            }
        }
        if (num > 1)
            System.out.println(num);
    }

    public static void main(String[] args) {
       checkPrimeFactor(12);
       checkPrimeFactorEfficientMethod(1212);
    }
}
