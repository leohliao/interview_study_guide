class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

// Iterative
const printLinkedList_iterative = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
// Recursive
const printLinkedList_recursive = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedList_recursive(head.next);
}
