/*
    1315. Sum of Nodes with Even-Valued Grandparent
    URL: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
    
    Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

    A grandparent of a node is the parent of its parent if it exists.

    

    Example 1:


    Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
    Output: 18
    Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
    Example 2:


    Input: root = [1]
    Output: 0
    

    Constraints:

    The number of nodes in the tree is in the range [1, 104].
    1 <= Node.val <= 100


*/ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumEvenGrandparent = function(root) {
    const stack = [];
    let result = 0;
  
    stack.push(root);
  
    while (stack.length > 0) {
      let curr = stack.pop();
      let leftChild = curr.left;
      let rightChild = curr.right;
  
      if (curr.val % 2 === 0) {
        // even
        if (leftChild !== null) {
          // left child exists
          if (leftChild.left !== null) {
            result += leftChild.left.val;
          }
          if (leftChild.right !== null) {
            result += leftChild.right.val;
          }
          stack.push(leftChild);
        }
  
        if (rightChild !== null) {
          // right child exists
          if (rightChild.left !== null) {
            result += rightChild.left.val;
          }
          if (rightChild.right !== null) {
            result += rightChild.right.val;
          }
          stack.push(rightChild);
        }
      } else {
        // odd
        if (leftChild !== null) {
          stack.push(leftChild);
        }
        if (rightChild !== null) {
          stack.push(rightChild);
        }
      }
    }
  
    return result;
  };
  
  
  /*
  
                          6
                /                  \
               7                     8
          /          \          /          \
        2              7       1             3
      /              /  \                      \
    9              1      4                      5
  
  
  
  pre-order dfs
  
  
  result = 0
  
  stack
  --------------------------------------------------------------------------------
  |
  --------------------------------------------------------------------------------
  
  current = (6)
  
  
  
  Notes: 
  
  - after popping the current node from stack
    - if node is even 
      - check if left child exists
        - check if left child exists
          - add this node's value to result
        - check if right child exists 
          - add this node's value to result
      - check if right child exists
        - check if left child exists
          - add this node's value to result
        - check if right child exists 
          - add this node's value to result
  
  */