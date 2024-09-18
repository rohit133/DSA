package Mathematics;
import java.util.Vector;

public class SieveOfEratorthoncs {
    public static void naiveMethod(int num ){
        for (int i = 1; i<=num; i++) {
            if(CheckPrime.checkPrimeEfficientMethod(i))  
                System.out.println(i);
        }
    }

    void sieve(int num){
        Vector <Boolean> isPrime = new Vector<>([num+1, true]);

    }


    public static void main(String[] args) {
        naiveMethod(10);
    }
}

