/*
Write a function to find the node at which the intersection of two singly linked lists begins.

If there is no intersection between the two nodes, simply return null.

Input:  headA {ListNode}, headB {ListNode}
Output: {ListNode} or null

Input: 	a1, b1


A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3


Output:	c1



Input:  a1, b1

A:          a1 → a2


B:     b1 → b2 → b3


Output: null

-- Constraints
  - Time: O(N + M)
  - Space: O(N)

-- Diagram

  A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
  B:     b1 → b2 → b3

  iterate A
  unique = {a1: true, a2: true, c1: true ...}

  iterate B
  unique[b]
  if yes:
    return unique[b]

  return null
  

-- Pseudocode

  currentA = headA
  currentB = headB
  unique = {}

  while currentA !== null

    unique["currentA.val" + "currenA.next.val"]
    currentA = currentA.next

  while currentB !== null
    if unqiue["currentB.val" + "currenB.next.val"]
      return unqiue["currentB.val" + "currenB.next.val"]
    currentB = currentB.next

  return null;


  - Diagram 2: (reverse)
  A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
  B:     b1 → b2 → b3

                               i
  reverse A: c3 -> c2 -> c1 -> a2 -> 1
  reverse B: c3 -> c2 -> c1 -> b3 -> b2 -> b1
                               j
  
                               
  if head for a & b is the same, then continue
    if once A[i] == B[j]
      prev = A[i]

    if A[i] != B[j]
      return prev
    
  return null
  
  
*/


class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  let head = new ListNode(1);
  head.next = new ListNode(5);
  head.next.next = new ListNode(7);
  head.next.next.next = new ListNode(10);
  head.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(1);
  head.next.next.next.next.next.next.next = new ListNode(4);
  
  // const isPalindrome = (head) => {
  //   // TODO
  //   let length = 0;
  //   let count = {};
  //   // '15710751'
  //   let current = head;
  
  //   while (current !== null) {
  //     const key = current.val;
  //     if (count[key]) {
  //       delete count[key];
  //     } else {
  //       count[key] = true;
  //     }
  //     current = current.next;
  //     length++;
  //   }
  
  //   if (
  //     (length % 2 === 0 && Object.keys(count).length === 0) ||
  //     (length % 2 !== 0 && Object.keys(count).length === 1)
  //   ) {
  //     return true
  //   }
  
  //   return false;
  // }
  
  /*
  
  A:          1 → 5
                     ↘
                       7 → 10
                     ↗            
  B:       2 → 3 → 4
  
  Output: 7
  
  */
  
  let headA = new ListNode(1);
  headA.next = new ListNode(5);
  headA.next.next = new ListNode(7);
  headA.next.next.next = new ListNode(10);
  
  let headB = new ListNode(2);
  headB.next = new ListNode(3);
  headB.next.next = new ListNode(4);
  headB.next.next.next = headA.next.next;
  
  
  /*
  
  A:       1 → 5 → 7 → 10
  
  B:       2 → 3 → 4 → 9
  
  Output: null
  
  */
  
  let headC = new ListNode(1);
  headC.next = new ListNode(5);
  headC.next.next = new ListNode(7);
  headC.next.next.next = new ListNode(10);
  
  let headD = new ListNode(2);
  headD.next = new ListNode(3);
  headD.next.next = new ListNode(4);
  headD.next.next.next = new ListNode(9);
  
  const getIntersectionNode = (A, B) => {
    // let currentA = A;
    // let currentB = B;
    // let unique = {};
  
    // while (currentA !== null) {
    //   const key = `${currentA.val}_${currentA.next ? currentA.next.val : "last" }`;  
    //   unique[key] = true;
    //   currentA = currentA.next;  
    // }
  
    // while (currentB !== null) {
    //   const key = `${currentB.val}_${currentB.next ? currentB.next.val : "last" }`;  
    //   if (unique[key]) {
    //     return currentB;
    //   }
    //   currentB = currentB.next;  
    // }
  
    // return null;
    
    //  ----------------------------------------
    //      prev        a1
    //       idx  0     1 
    // reverse A: a1 -> a2 -> c1 -> c2 -> c3
    //                  c1
    
    // reverse A: c3 -> c2 -> c1 -> a2 -> a1
    // reverse B: c3 -> c2 -> c1 -> b3 -> b2 -> b1
    //                    
    
    let currentA = A;
    let currentB = B;
    let prev;
    let idx = 0;
    
    while (currentA != null) {
  
      let next = currentA.next;    
      if (idx === 1) {
        prev.next = null;
      }
      if (idx >= 1) {
        currentA.next = prev;  
      }
      
      prev = currentA;
      // increment
      currentA = next;  
      idx++;
    }
    currentA = prev;
  
    idx = 0;
    while (currentB != null) {
  
      let next = currentB.next;    
      if (idx === 1) {
        prev.next = null;
      }
      if (idx >= 1) {
        currentB.next = prev;  
      }
      
      prev = currentB;
      // increment
      currentB = next;  
      idx++;
    }
    currentB = prev;
    
  
    // while (currentB != null) {
    //   console.log(currentB)
    //   currentB = currentB.next
    // }
    let ph = null;
    while (currentA !== null && currentB !== null) {
  
      if (currentA.val === currentB.val) {
        ph = currentA;
      } else {
        return ph;
      }
    
      if (currentA.next !== null) {
        currentA = currentA.next;  
      }
      if (currentB.next !== null) {
        currentB = currentB.next;  
      }
    }
      
    return ph;
  }
  
  console.log(getIntersectionNode(headA, headB))
  // console.log(getIntersectionNode(headC, headD))