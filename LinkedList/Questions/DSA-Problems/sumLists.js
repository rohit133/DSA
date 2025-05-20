
const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
/*
class ListNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
*/

function reverse(head){
      let current = head, next = null, prev = null;
      while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
      }
      return prev;
}

/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function sumLists2(head1, head2) {
      let dummy = new ListNode();
      let res = dummy;
      let total = 0, carry = 0;
      
      revHead1 = reverse(head1);
      revHead2 = reverse(head2);


      while(revHead1 || revHead2 || carry){
            total = carry;
            if(revHead1){
                  total += revHead1.val;
                  revHead1 = revHead1.next;
            }
            if(revHead2){
                  total += revHead2.val;
                  revHead2 = revHead2.next;
            }
            let num = total % 10;
            carry = Math.floor(total / 10);
            dummy.next = new ListNode(num);
            dummy = dummy.next;
      }
      return reverse(res.next);

}

module.exports = sumLists2;

