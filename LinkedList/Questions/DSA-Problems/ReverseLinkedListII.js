function ReverseLinkedListii(head, left, right){
    let dummy = {next: head};
    let prevPoint = dummy;

    for(let i=1; i<left; i++){
        prevPoint = prevPoint.next;
    }
    let current = prevPoint.next;
    for(let i=0; i < right-left;i++){
        let forward = current.next;
        current.next = forward.next;
        forward.next = prevPoint.next
        prevPoint.next = forward;
    }
    return dummy.next;
}