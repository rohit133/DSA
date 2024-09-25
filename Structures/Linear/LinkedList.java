package Structures.Linear;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    private Node head;

    public void insertNode(int data) {
        // Description: Insert a new node at the start of the list

        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    public void appendNode(int data) {
        // Description: Insert a new node at the end of the list.

        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    public void givenPosition(int data, int positions) {
        // Description: Insert a new node at the given position of the list.

        Node newNode = new Node(data);
        if (positions == 0) {
            newNode.next = head;
        }
        Node current = head;
        for (int i = 0; i < positions - 1; i++) {
            if (current == null)
                System.out.println("Invalid position");
        }
        current = current.next;
        newNode.next = current.next;
        current.next = newNode;
    }

    public Node deleteByValue(int value) {
        if (head == null) {
            return null; // If the list is empty
        }

        if (head.data == value) {
                head = head.next;
                return head;
        }

        Node prev = null;
        Node current = head;

        while (current != null) {
            if (current.data == value) {
                prev.next = current.next;
                return head;
            }
            prev = current;
            current = current.next;
        }
        return head;

    }

    public Node deleteAtBeginning(){
        if (head == null){
            return null;
        }
        return head = head.next;
    }

    public Node deleteAtEnd(){
        if (head == null) {
            return null; // If the list is empty
        }
    
        if(head.next == null){
            return null;
        }

        Node current = head;

        while (current.next.next != null) {
                current = current.next;
        }
        return current.next = null;

    }

    public boolean searchByValue(int value){
        if(head == null){
            return false;
        }
        Node current = head;
        while (current.next != null) {
            if(current.data == value){
                return true;
            }
            current = current.next;
        }
        return false;

    }

    public Node reverseNode(){
        Node prev = null;
        Node current = head;
        Node next;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;  // Set the last node as the new head
        return head;
    }

    public int getListLength(){
        int count = 0;
        Node current = head;
        while (current != null) {
            count ++;
            current = current.next;
        }
        return count;
    }
    
    public Boolean isListEmpty(){
        if (head == null){
            return true;
        }
        return false;
    }

    public Node findMiddleNode(){
        if (head == null){
            return null;
        }
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next.next != null) {
            slow = slow.next;
            fast =  fast.next.next;
        }
        return slow;
    }


    public Boolean detectLoop(){
        if (head == null){
            return null;
        }
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next.next != null) {
            slow = slow.next;
            fast =  fast.next.next;
            if (slow == fast)   
                return true;

        }
        return false;
    }

    public void viewList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }

}

public class LinkedList {

    public static void main(String[] args) {

        SinglyLinkedList singleLinkedList = new SinglyLinkedList();
        singleLinkedList.appendNode(9);
        singleLinkedList.appendNode(19);
        singleLinkedList.appendNode(92);
        singleLinkedList.appendNode(29);
        singleLinkedList.appendNode(39);
        singleLinkedList.viewList();
        singleLinkedList.insertNode(10);

        System.out.println("after Inserting at the Begining: ");
        singleLinkedList.viewList();

        System.out.println("after Inserting at the End: ");
        singleLinkedList.appendNode(50);
        singleLinkedList.viewList();

        System.out.println("after Inserting at the given positions: ");
        singleLinkedList.givenPosition(5, 3);
        singleLinkedList.givenPosition(1, 2);
        singleLinkedList.viewList();


        System.out.println("after deleteing by the given positions: ");
        singleLinkedList.deleteByValue(19);
        singleLinkedList.viewList();

        singleLinkedList.deleteAtBeginning();
        singleLinkedList.viewList();

        singleLinkedList.deleteAtEnd();
        singleLinkedList.viewList();
        System.out.println(singleLinkedList.searchByValue(29));

        System.out.println("Reversing the Linked List: ");
        singleLinkedList.reverseNode();
        singleLinkedList.viewList();
    }

}
