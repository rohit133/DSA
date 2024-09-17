package Mathematics;

public class Palindrome {

    public static boolean isPalindrome(int num) {
        int rev = 0, rem = 0;
        int temp = num;
        while (temp > 0) {
            rem = temp % 10;
            rev = rev * 10 + rem;
            temp = temp / 10;
        }
        if (rev == num)
            return true;
        else
            return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(1011));
    }

}
