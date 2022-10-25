/*
Write a function, mergeLists, 
that takes in the head of two sorted linked lists as arguments. 
The function should merge the two lists together into single sorted linked list. 
The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

test_00:
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
test_01:
const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 
test_02:
const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67

mergeLists(h, p);
// 15 -> 30 -> 67

*/ 

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const mergeLists = (head1, head2) => {
    let result = head1.val >= head2.val ? head2 : head1;
    let current1 = head1;
    let current2 = head2;
    let current = null;
    if (current1.val > current2.val) {
      current = current2;
      current2 = current2.next;
    } else {
      current = current1;
      current1 = current1.next;
    }
    
    while (current1 !== null && current2 !== null) {
      if (current1 === null) {
        current.next = current2;
        current2 = current2.next;
      }
      if (current2 === null) {
        current.next = current1;
        current1 = current1.next;
      }
      if (current1.val < current2.val) {
        current.next = current1;
        current1 = current1.next;
      } else if (current2.val < current1.val) {
        current.next = current2;
        current2 = current2.next;
      } else {
        current.next = current1;
        current1 = current1.next;
        current = current.next;
        current.next = current2;
        current2 = current2.next;
      }
      
      current = current.next;
      
    }
    if (current1 !== null) {
      current.next = current1;
    }
    if (current2 !== null) {
      current.next = current2;
    }
    
    return result;
  };