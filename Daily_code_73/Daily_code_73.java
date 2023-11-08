package Daily_code_73;

public class Daily_code_73 {

    static Node head;

    static class Node {
        Node prev;
        int data;
        Node next;

        Node(int d) {
            data = d;
            next = null;
            prev = null;
        }

        Node(int d, Node p, Node n) {
            data = d;
            prev = p;
            next = n;
        }
    }

    static void Display(Node currNode) {
        Node tail = null;
        System.out.println("Forward Direction:");
        while (currNode != null) {
            System.out.println(currNode.data);
            tail = currNode;
            currNode = currNode.next;
        }
        currNode = tail;
        System.out.println("Backward Direction:");
        while (currNode != null) {
            System.out.println(currNode.data);
            currNode = currNode.prev;
        }
    }
    
    public static void main(String[] args) {
        head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        head.next = second;
        second.prev = head;
        second.next = third;
        third.prev = second;

        Display(head);
    }

}
