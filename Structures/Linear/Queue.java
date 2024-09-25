package Structures.Linear;

public class Queue {
    private int rear, front;
    private int maxSize; // maximum size of the stack
    private int[] queue;

    public Queue(int size) {
        this.maxSize = size;
        this.queue = new int[maxSize];
        this.rear = -1;
        this.front = -1;
    }

    public void enQueue(int value) {
        if (IsFull()) {
            System.out.println("Queue is full");
        } else {
            if (front == -1) {
                front = 0;
            }
            queue[++rear] = value;
        }
    }

    public int deQueue() {
        if (IsEmpty()) {
            System.out.println("Queue is Empty");
            return -1;
        } else {
            if (front >= rear) {
                front = -1;
                rear = -1;
            }
            return front++;
        }
    }

    public void printQueue() {
        if (IsEmpty()) {
            System.out.println("Queue is Empty");
            return;
        } else {
            for (int i = front; i <= rear; i++) {
                System.out.println(queue[i]);
            }
        }
    }

    public Boolean IsEmpty() {
        if (front == -1) {
            return true;
        }
        return false;
    }

    public Boolean IsFull() {
        if (front == 0 && rear == maxSize - 1) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Queue queue = new Queue(5);

        System.out.println(queue.IsEmpty());
        queue.enQueue(10);
        queue.enQueue(12);
        queue.enQueue(14);
        queue.enQueue(16);
        queue.enQueue(18);
        System.out.println(queue.IsFull());

        queue.printQueue();
        queue.deQueue();
        System.out.println("After Deleting the Element from the Queue!");
        queue.printQueue();

    }

}
