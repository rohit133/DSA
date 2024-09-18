package Mathematics;

public class CheckPrime {
    public static boolean checkPrimeNaive(int num) {
        if (num == 1)
            return false;
        for (int i = 2; i < num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    public static boolean checkPrimeEfficientMethod(int num) {
        if (num == 1)
            return false;
        for (int i = 2; i*i <=num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    public static boolean checkPrimeMoreEfficientMethod(int num) {
        if (num == 1){
            return false;
        }
        if (num == 2 || num == 3){
            return false;
        }
        if (num % 2 == 0 && num % 3 == 0){
            System.out.println("num: " +num);
            return false;
        }
        for (int i = 5; i*i <=num; i=i+6) {
            if (num % i == 0 || num % (i + 2) == 0)
                return false;
        }
        System.out.println("error code 1");
        return true;
    }

    public static void main(String[] args) {
        // System.out.println(checkPrimeNaive(7));
        // System.out.println(checkPrimeEfficientMethod(4));
        System.out.println(checkPrimeMoreEfficientMethod(4));

    }
}
