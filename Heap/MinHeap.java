import java.util.ArrayList;
import java.util.Collections;


class Heap {
    private List<Integer> data = new ArrayList<>();
    
    public int size() {
        return data.size;
    }

    public int peek() {
        return data.get(0); // data (0]
    }

    public void push(int ele) {
        // 1. Complete Binary Tree
        data.add (ele); // 0(1)

        // 2. Heap Order Property
        upheapify(data.size() - 1);
    }

    private void upheapify(int idx) {
        if(idx == 0) return;
        int parent = (idx - 1) / 2;
        
        if(data.get(parent) > data.get (idx)) {
            Collections. swap(data, idx, parent);        
            upheapify (parent) ;
        }

    }

    public void pop() {
        // 1. Complete Binary Tree
        int n = data.size();
        Collections.swap(data, 0, n - 1); // Swap root with last element 
        data.remove(n -1);

        // 2. Heap Order Property
        downheapify(0);
    }
    
    private voide downheapify(int idx) {
        int min = idx;
        int l = 2 * idx + 1, r = 2 * idx + 2;

        // LEFT
        if(l < data.size() && data.get(l) < data.get(min)) {
            min = l;
        }

        // RIGHT
        if(r < data.size() && data.get(r) < data.get(min)) {
            min = r;
        }

        if(min == l) {
            Collections.swap(data, idx, l);
            downheapify(l);
        } else if(min == r) {
            Collections.swap(data, idx, r);
            downheapify(r);
        }
    }

    public static void main(String[] args) {
        Heap heap = new Heap();
        heap.push(10);
        heap.push(20);
        heap.push(5);
        heap.push(15);
        
        System.out.println("Heap size: " + heap.size());
        System.out.println("Top element: " + heap.peek());
        
        heap.pop();
        System.out.println("Top element after pop: " + heap.peek());
    }
}

