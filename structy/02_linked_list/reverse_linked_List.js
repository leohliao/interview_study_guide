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


const reverseList_iterative = (head) => {
    let current = head;
    let prev = null;
    
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      
      prev = current;
      current = next;
    }
    return prev;
};

const reverseList_recursive = (head, prev=null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList_recursive(next, head);
};

console.log(reverseList(a));
console.log('d: ', d);
console.log('c: ', c);
console.log('b: ', b);
console.log('a: ', a);
