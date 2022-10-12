class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
a.next = b;
b.next = c;
c.next = d;

const x = new Node('X');
const y = new Node('Y');
const z = new Node('Z');
x.next = y;
y.next = z;

const zipperLists = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;
    let count = 0;
    
    let current = current1;
    current1 = current1.next;
    
    while (current1 !== null && current2 !== null) {
  
      if (count % 2 === 0 && current2 !== null) {
      // even
        current.next = current2;
        current = current2;
        current2 = current2.next;
        count++;
      } else if (!(count%2 === 0) && current1 !== null) {
        // odd
        current.next = current1;
        current = current1;
        current1 = current1.next;
        count++;  
      } else {
        break;
      }
    }
  
    return head1;
    // Alternative
    // const head = head1;
    // let tail = head;
    // let current1 = head1.next;
    // let current2 = head2;
    // let count = 0;
    
    // while (current1 !== null && current2 !== null) {
    //   if (count % 2 === 0) {
    //     tail.next = current2;
    //     current2 = current2.next;
    //   } else {
    //     tail.next = current1;
    //     current1 = current1.next;
    //   }
    //   tail = tail.next;
    //   count += 1;
    // }
    
    // if (current1 !== null) tail.next = current1;
    // if (current2 !== null) tail.next = current2;
    
    // return head;
  };

  const zipperLists_recursive = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists_recursive(next1, next2);
    return head1;
  };

console.log(zipperLists(a, b));