package Mathematics;

public class LCM {
    public static int naiveLCM(int a, int b) {
        int result = Math.max(a, b);
        while (true) {
            if (result % a == 0 && result % b == 0) {
                return result;
            }
            result++;
        }
    }

    public static int EfficientMethodLCM(int a, int b) {
        if (b == a)
            return a;
        return (a * b) / GCD.OptimzedEuclideanGCD(a, b);
    }

    public static void main(String[] args) {
        System.out.println(naiveLCM(4, 6));
        System.out.println(EfficientMethodLCM(4, 6));

    }
}
