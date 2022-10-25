/*

how high
Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.

test_00:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

howHigh(a); // -> 2
test_01:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

howHigh(a); // -> 3
test_02:
const a = new Node('a');
const c = new Node('c');

a.right = c;

//      a
//       \
//        c

howHigh(a); // -> 1
test_03:
const a = new Node('a');

//      a

howHigh(a); // -> 0
test_04:
howHigh(null); // -> -1

*/ 

const howHigh = (head) => {
    let maxDepth = -1;
    
    const traverse = (node, depth) => {
      if (node === null) return;
      
      maxDepth = Math.max(depth, maxDepth);
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
      
    }
    traverse(head, 0);
    return maxDepth;
    
  };