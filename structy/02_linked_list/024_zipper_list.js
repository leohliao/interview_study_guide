/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
test_02:
const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4
test_03:
const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

zipperLists(w, one);
// w -> 1 -> 2 -> 3
test_04:
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
*/ 

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