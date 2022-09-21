/*
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit.
     Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Input:  l1 = [2,4,3], 
            l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Input:  l1 = [0], 
            l2 = [0]
    Output: [0]

    Input:  l1 = [9,9,9,9,9,9,9], 
            l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

    Constraints:
        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.

    --- Diagram
         i
        (2) -> (4) -> (3)
        (5) -> (6) -> (4)
         j
        
        (2 + 5) -> ((4 + 6) % 10) -> ((1 + 3 + 4))
                            ___________|
        (7) -> (0) -> (8)

    --- Diagram 
        i
        (9) -> (9) -> (9) -> (9) -> (9) -> (9) -> (9)       
        (9) -> (9) -> (9) -> (9)
         j
                        + 1                    +1                   +1                     +1                +1                +1               +1
        ((9 + 9) % 10) -> ((9 + 9 + 1) % 10)  -> ((9 + 9 + 1) % 10) ->  ((9 + 9 + 1) % 10) ->  ((9 + 1)% 10) -> ((9 + 1)% 10) -> ((9 + 1)% 10) -> ((1)% 10)
            (8)                (9)                  (9)                     (9)                     (0)             (0)             (0)             (1)
            
    --- Pseudocode
        
        current = new Node()
        ph = current
        increment

        while (l1 || l2)
            l1_val = l1 ? l1.val : 0
            l2_val = l2 ? l2.val : 0

            new_val = l1_val + l2_val + increment
            increment = 0;

            if new_val >= 10
                increment = Math.floor(new_val/10)
                new_val = new_val % 10

            if current.val
                current.next = new Node(val)
            else
                current.val = new_val

            if l1 && l2 == null
                l1 = l1.next
            if l1 == null && l2
                l2 = l2.next 

*/ 

var addTwoNumbers = function(l1, l2) {
    let current =  new ListNode(null);
    let head = current;
    let increment = 0;
    
    while (l1 || l2 ) {
        l1_val = l1 ? l1.val : 0;
        l2_val = l2 ? l2.val : 0;
        
        let new_val = l1_val + l2_val + increment;
        increment = 0
        
        if (new_val >= 10) {
            increment = Math.floor(new_val/10);
            new_val = new_val % 10;
        }
        
        if (current.val !== null) {
            current.next = new ListNode(new_val);
            current = current.next
        } else {
            current.val = new_val
        }
        
        if (l1 && l2) {
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1 && l2 === null) {
            l1 = l1.next
        } else if (l1 === null && l2) {
            l2 = l2.next;
        }
        if (increment > 0) {
            current.next = new ListNode(increment)
        }
        
    }
    return head;
    
    
    // Alternative approach 
    // let node = new ListNode();
    // let res = node;
    // let carry = 0;
  
    // while (l1 || l2) {
    //   let sum = carry;
  
    //   if (l1) {
    //     sum += l1.val;
    //     l1 = l1.next;
    //   }
    //   if (l2) {
    //     sum += l2.val;
    //     l2 = l2.next;
    //   }
  
    //   carry = Math.floor(sum / 10); // 15 / 10 = 1.5 => (1)
    //   // Add Node
    //   node.next = new ListNode(sum % 10); 
  
    //   // Traverse
    //   node = node.next;
    // }
    // if (carry > 0) {
    //   node.next = new ListNode(carry);
    // }
    // return res.next;
};