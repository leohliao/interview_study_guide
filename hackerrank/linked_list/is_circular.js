/*
    Linked List
    Is Circular

    Given an input of a ListNode, reutnr true if the ListNode is in a circular linked list, and falst if the linked list that terminates.

    Input: listNode
    Output: boolean


*/

function isCircular(node) {
    // check for repeating pattern
    // use Tortoise (Slow) and Hare (Fast)
    // H travels every term
    // T travels every 2 term
    // once H is T, then is Circular exists
    let current = node;
    if (current === null) {
        return true;
    }
    
    current = node.next;
    
    while (current !== null && current !== node) {
        current = current.next;
    }
    
    return (current === node);
    
}
