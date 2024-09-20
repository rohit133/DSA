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

    public void insertNode(int data){
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

    public void givenPosition(int data, int positions){
        Node newNode = new Node(data);
        if(positions == 0){
            newNode.next = head;
        }
        Node current = head;
        for(int i=0; i<positions-1; i++){
            if(current == null)
                System.out.println("Invalid position");
        }
        current = current.next;
        newNode.next = current.next;
        current.next = newNode;
    }

    

    public void viewList(){
        Node temp = head;
        while (temp != null) {
            System.err.print(temp.data + " -> ");
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
        singleLinkedList.givenPosition(1,2);
        singleLinkedList.viewList();


        

    }
 
}
