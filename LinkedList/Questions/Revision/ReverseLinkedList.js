function reversedList(head){
    let current = head;
    let prev = null;
    while(current.next !== null){
        let forward = current.next;
        current.next = prev;
        prev = current;
        current = forward;
    }
}