/*
    Linked List
    Print Backward

    Given a node, print the value of each node backwards from the tail to the input node using recursion.

    Input: node {ListNode}
    Output: void

    Example: (1) -> (5) -> (7) -> (10)
            Head                    Tail
            10
            7
            5
            1

     For your reference:
    
     SinglyLinkedListNode {
         int data;
         SinglyLinkedListNode next;
     }
    
    

*/

function printBackward(node) {
    // Write your code here
    
    const traverse = (current) => {
        if (current === null) {
            return;
        }
        traverse(current.next);
        console.log(current.data);
    }
    return traverse(node);
}
