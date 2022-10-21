/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
test_00:
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
test_01:
//  7541
// +  32
// -----
//  7573

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;
// 2 -> 3 

addLists(a1, b1);
// 3 -> 7 -> 5 -> 7
test_02:
//   39
// + 47
// ----
//   86

const a1 = new Node(9);
const a2 = new Node(3);
a1.next = a2;
// 9 -> 3

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 8
test_03:
//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 3 -> 1
test_04:
//   999
//  +  6
//  ----
//  1005

const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;
// 9 -> 9 -> 9

const b1 = new Node(6);
// 6

addLists(a1, b1);
// 5 -> 0 -> 0 -> 1

*/ 

const addLists = (head1, head2) => {
    let head;
    let current1 = head1;
    let current2 = head2;
    let prev = head;
    let tenth = 0;
    
    while (current1 !== null || current2 !== null || tenth !== 0) {
      let val_1 = current1 ? current1.val : 0;
      let val_2 = current2 ? current2.val : 0;
      let new_total = val_1 + val_2 + tenth;
      tenth = 0;
      
      if (new_total > 9) {
        tenth = Math.floor(new_total/10);
        new_total = new_total % 10;
      }
      
      let current = new Node(new_total);
      if (!head) {
        head = current;
      }
  
      if (!prev) {
        prev = current;
      } else {
        prev.next = current;
        prev = prev.next;
      }
    
      current1 = current1 ? current1.next: null;
      current2 = current2 ? current2.next: null;
      
    }
    
    return head;
    
  };