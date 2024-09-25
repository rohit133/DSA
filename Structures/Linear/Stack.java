package Structures.Linear;

public class Stack {
    private int top;
    private int maxSize;    // maximum size of the stack
    private int[] stackArray;   // array to store stack elements

    public Stack(int size){
        this.maxSize = size;
        this.stackArray =  new int[maxSize];
        this.top = -1;
    }

    public void push(int value){
        if(IsFull()){
            System.out.println("Stack Overflow cannot perform Push :" +value);
        } else {
            stackArray[++top] = value;
        }
    }

    public int pop(){
        if(IsEmpty()){
            System.out.println("Stack UnderFlow cannot perform Pop!");
            return -1;
        } else {
            return stackArray[top--];
        }
    }

    public int peek(){
        if(IsEmpty()){
            System.out.println("Stack UnderFlow cannot perform Peek!");
            return -1;
        } else {
            return stackArray[top];
        }
    }

    public void print(){
        if(IsEmpty()){
            System.out.println("Stack is Empty!");
        } else {
            for(int i = top; i >= 0; i--){
                System.out.println(stackArray[i]);
            }
        }


    }
    public Boolean IsEmpty(){
        if(top == -1){
            return true;
        }
        return false;
    }

    public Boolean IsFull(){
        if(top == maxSize - 1){
            return true;
        }
        return false;
    }


    public static void main(String[] args) {
        Stack stack = new Stack(5);
        System.out.println(stack.IsEmpty());
        stack.push(10);
        stack.push(12);
        stack.push(14);
        stack.push(16);
        stack.push(18);
        stack.print();
        stack.pop();
        System.out.println("After Poping the element");
        stack.print();
        System.out.println(stack.IsFull());
        System.out.println("Peeking on Stack");
        System.out.println(stack.peek());






    }
    
}
