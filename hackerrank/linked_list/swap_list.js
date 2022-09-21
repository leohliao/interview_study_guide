
/*
    Linked List
    Swap List Nodes

    Create a method which swap the first occurence of the locations of two nodes in the linked liist.

    Input: head {ListNode}
    Input: a {integer}
    Input: b {integer}
    Output: {ListNode}

    Example: 
    Input: Swap (head, 5, 10)
        (1)   ->   (5)   ->  (7)  -> (10)
        Head
    Output:
        (1)   ->   (10)   ->  (7)  -> (5)
        Head

     For your reference:
    
     SinglyLinkedListNode {
         int data;
         SinglyLinkedListNode next;
     }
    
    

*/

function swapNodes(head, a, b) {
    // Hunt the a and b nodes, and their parents
    // manipulate their .next pointer to change the locations
    
    let ph = new SinglyLinkedListNode(null);
    ph.next = head;

    let parent = ph;
    let current = head;
    // there are: currentA, parentA, currentB, parentB

    let currentA;
    let parentA;
    let currentB;
    let parentB;


    while (current !== null) {
        if (current.data === a && currentA === undefined) {
            currentA = current; 
            parentA = parent;
        }
        if (current.data === b && currentB === undefined) {
            currentB = current; 
            parentB = parent;
        }

        current = current.next;
        parent = parent.next;
    }
    console.log("currentA: ", currentA);
    console.log("parentA: ", parentA);
    console.log("currentB: ", currentB);
    console.log("parentB: ", parentB);

    if (currentA === undefined || currentB === undefined) {
        return ph.next;
    } 

    parentB.next = currentA;
    parentA.next = currentB;

    let ref = currentA.next;
    currentA.next = currentB.next
    currentB.next = ref;

    return ph.next;
}
 