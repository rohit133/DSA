/**
 * 
 * @param {head} list 
 * @returns {LinkedList} 
 * Return the reversed linked list. 
 */

function reverseLinkedList(head){
    let current = head;
    let prev = null;
    while(current !== null){
        let forward = current.next;
        current.next = prev;
        prev = current;
        current = forward;
    }
    return prev
}