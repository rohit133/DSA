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

    static void checkPrimeFactorMoreEfficientMethod(int num) {
        if (num == 1)
            return;
        while (num % 2 == 0) {
            System.out.println(2);
            num = num / 2;
        }
        while (num % 3 == 0) {
            System.out.println(3);
            num = num / 3;
        }
        for (int i = 5; i * i <= num; i = i + 6) {
            while (num % i == 0) {
                System.out.println(i);
                num = num / i;
            }
            while (num % (i + 2) == 0) {
                System.out.println(i + 2);
                num = num / (i + 2);
            }
        }
        if (num > 3)
            System.err.println(num);
    }

    public static void main(String[] args) {
        checkPrimeFactor(23);
        // checkPrimeFactorEfficientMethod(1212);
        // checkPrimeFactorMoreEfficientMethod(450);
    }
}
