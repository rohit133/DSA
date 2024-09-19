package Structures.Linear;
import java.util.Random;

public class Array {

    public static void fixedArray(int size){
        int arr[];
        Random rand =  new Random();
        arr = new int[size];
        for(int i=0; i<size; i++){
            arr[i] = rand.nextInt(0, 10);
        }
        for(int j=0; j<size; j++){
            System.out.println(arr[j]);
        }
    }
    public static void main(String[] args) {
        fixedArray(8);
    }
    
}
