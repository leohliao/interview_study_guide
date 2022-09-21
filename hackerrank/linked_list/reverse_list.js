 
/*
    Linked List
    Reverse Linked List

    Given a node, print the value of each node backwards from the tail to the input node using recursion.

    Input: node {ListNode}
    Output: node {ListNode}

    Example: 
    Input:   (1) -> (5) -> (7) -> (10)
            Head                   Tail
    Output: (10) -> (7) -> (5) -> (1)
            Head                  Tail

     For your reference:
    
     SinglyLinkedListNode {
         int data;
         SinglyLinkedListNode next;
     }
    
    

*/

function reverseLinkedList(node) {
    // Write your code here
    let prev = null;
    let current = node;

    while (current !== null) {
        let ref = current.next;

        current.next = prev;
        prev = current;
        current = ref;
    }
    return prev;
}
