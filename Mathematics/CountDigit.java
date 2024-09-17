package Mathematics;

public class CountDigit {

    public static int count(int num) {
        int counter = 0;
        while (num > 0) {
            num = num / 10;
            counter++;
        }
        return counter;
    }

    public static void main(String[] args) {
        System.err.println(count(1909));
    }

}
