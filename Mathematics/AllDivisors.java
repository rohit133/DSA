package Mathematics;

public class AllDivisors {

    public static void divisorsNaiveMethod(int num) {
        for (int i = 1; i <= num; i++) {
            if (num % i == 0)
                System.out.println(i);
        }
    }

    public static void divisorsEfficientMethodUnSorted(int num) {
        for (int i = 1; i * i <= num; i++) {
            if (num % i == 0) {
                System.out.println(i);
                if (i != num / i)
                    System.out.println(num / i);
            }
        }
    }

    public static void divisorsEfficientMethodSorted(int num) {
        int i;
        for (i = 1; i * i <= num; i++) {
            if (num % i == 0)
                System.out.println(i);
        }
        for (; i >= 1; i--) {
            if (num % i == 0)
                System.out.println(num / i);
        }
    }

    public static void main(String[] args) {
        // divisorsNaiveMethod(50);
        // divisorsEfficientMethodUnSorted(100);
        divisorsEfficientMethodSorted(10);

    }

}
