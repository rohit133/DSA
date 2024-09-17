package Mathematics;

public class GCD {
    public static int gcdNavie(int a, int b) {
        // Navie approce for calculating the Greatest common divisor

        int res = Math.min(a, b);
        while (res > 0) {
            if (a % res == 0 && b % res == 0)
                break;
            res--;
        }
        return res;
    }

    public static int EuclideanGCDBase(int a, int b) {
        // Euclidean approce for calculating the Greatest common divisor
        while (a != b) {
            if (a > b)
                a = a - b;
            else
                b = b - a;
        }
        return a;

    }

    public static int OptimzedEuclideanGCD(int a, int b) {
        // Optimzed Euclidean's approce for calculating the Greatest common divisor ' ** Formula **  - gcd(b, a % b)' 

        if (b == 0)
            return a;
        else
            return OptimzedEuclideanGCD(b, a % b);
    }

    public static void main(String[] args) {
        System.err.println(gcdNavie(12, 15));
        System.err.println(EuclideanGCDBase(12, 15));
        System.err.println(OptimzedEuclideanGCD(12, 15));

    }
}
