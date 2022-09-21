
/*
    Linked List
    Print Forward

    Create a method which prints the value of each node until the tail

    Input: node {ListNode}
    Output: void

    Example: (1) -> (5) -> (7) -> (10)
            Head                    Tail
            1
            5
            7
            10

     For your reference:
    
     SinglyLinkedListNode {
         int data;
         SinglyLinkedListNode next;
     }
    
    

*/

function printForward(node) {
    // Write your code here
    let current = node;

    while(current !== null) {
        console.log(current.data);
        current = current.next;
    }
}
 