/*
Given the head node of a singly linked list, return true if the values of the linked list forms a palindrome.

 original = (1) -> (2) -> (3) -> 
ref = (3) <- (2) <- (1) = (1) -> (2) -> (3)
        ^
        |
Input: (1)
Output: True


       (1) -> (2) -> (4) -> (2) -> (1)
        ^
        |
Input: (1)
Output: True



       (5) -> (8) -> (4) -> (1) -> (7)
        ^
        |
Input: (5)
Output: False

Input: ()
Output: False

--- Constraint
  - Time/Space: O(N) / O(1)

--- Diagram

    length = 5
    count = {}
                                 q
  - (1) -> (2) -> (4) -> (2) -> (1)

    length = 6
    count = {}
      q
  -  (1) -> (2) -> (3) -> (3) -> (2) -> (1)

-- Pseudo

  length = 0
  count = {}
  current = root
  
  while current !== null

    if count[q]
        delete count[q]
    else
      count[q] = true
  
    current = current.next
    length++

//even
  if length % 2 === 0  && object.keys(count).length === 0
    return true 
  // if length % 2 !== && object.keys(count).length === 1
    return true

  return false
  
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
  

/*
  1st Approach
  Time: O(N)
  Space: O(N)
*/   
  
  const isPalindrome = (head) => {
    // TODO
    let length = 0;
    let count = {};
    // '15710751'
    let current = head;
  
    while (current !== null) {
      const key = current.val;
      if (count[key]) {
        delete count[key];
      } else {
        count[key] = true;
      }
      current = current.next;
      length++;
    }
  
    if (
      (length % 2 === 0 && Object.keys(count).length === 0) ||
      (length % 2 !== 0 && Object.keys(count).length === 1)
    ) {
      return true
    }
  
    return false;
  }
  console.log(isPalindrome(head));


  
/*
  2nd Approach:
  Time: O(n)
  Space: O(1)

--- Diagram (v2)
     O(n) / Q(1)
  - 1st iteration
     q  
  - (1) -> (2) -> (4) -> (2) -> (1)   
  - length => length/2 => median
  
  - 2nd iteration
  - prev: i
  - current: q
  -         i             q  
  - (1) -> (2) -> (4) -> (2) -> (1)  

  i.next = null
  - (1) -> (2)           (2) <-- (1)  
  
  - after median
  ref = q.next
  q.next = null
  ref.next = q

  - l1 = (1) -> (2) 
  - l2 = (1) -> (2)

  
*/

  const isPalindrome_2 = (head) => {
  let length = 0;
  let current = head;
  //
  while (current !== null) {
    current = current.next;
    length++
  }

  if (length <= 0) {
    return false;
  }

  let median = Math.floor(length / 2);
  
  let prev = head;
  current = head; // reset to head
  let ref;

  while (current !== null) {
    
  }
  // tailA.next = null;
  // console.log('head: ', head)
  // console.log('tailA: ', tailA)

//   let beginReverse = Math.floor(count / 2);
//   let position = 0;

//   let prev;
//   current = head;
//   let ref;

//   while (current !== null) {
//       // reverse second half of linked list
//       if (position >= beginReverse) {
//           if (prev === undefined) {
//               prev = current;
//               current = current.next;
//           }

//           ref = current.next;
//           current.next = prev;
//           prev = current;
//           current = ref;
//       } else {
//           position++;
//           current = current.next;    
//       }
//   }
  
}
console.log(isPalindrome_2(head));