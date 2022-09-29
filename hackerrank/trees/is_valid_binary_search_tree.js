/*
Given a binary tree root node, check if the tree is a valid binary search tree.

I/O:
  Input: null
  Output: false

  Input: root
  Output: True/False

--- Constraint
  - Time/Space: As efficient as possible
  - Left Node < Current Node < Right Node

-- Diagram:
TRUE

        5
      /   \
     3     7
   /  \   /  \
  2   4  6    8

  : in-order
  result = [2, 3, 4, 5, 6, 7, 8]
                           i  j
  
FALSE

        5
      /   \
     4     6
   /  \   /  \
  2   3  7    8
  
  in-order
 result = [2, 4, 3, 5, 7, 6, 8]
                          j  i


-- Pseudocode

   result = [] // in-order

   if root === null
    return false

   function dfs(current)
     if current === null 
       return;

     //left
      dfs(current.left)
     // action
      result <= current.value
     // right
      dfs(current.right)

   dfs(root)

   for i = 1;  i < result.length; i++
       rightNum = result[i]
       leftNum = result[i - 1]
       if left > right
        return false
  return true
       
*/

function isValidBinarySearchTree(root) {
  
    const result = []
  
    if (root === null) {
      return false;
    }
  
    function dfs(current) {
      if (current === null) {
        return;
      }
      // left
      dfs(current.left);
      // action
      result.push(current.value);
      // right
      dfs(current.right);
    }
  
    dfs(root);
    console.log('result: ', result);
    for (let i = 1; i < result.length; i++) {
      const rightNum = result[i];
      const leftNum = result[i - 1];
      if (leftNum > rightNum) {
        return false;
      }
    }
    return true;
    
  }
  
  
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /*
          5
        /   \
       3     7
     /  \   /  \
    2   4  6    8
  */ 
  
  const root_true = new TreeNode(5);
  root_true.left = new TreeNode(3);
  root_true.right = new TreeNode(7);
  
  root_true.left.left = new TreeNode(2);
  root_true.left.right = new TreeNode(4);
  
  root_true.right.left = new TreeNode(6);
  root_true.right.right = new TreeNode(8);
  
  /*
          5
        /   \
       4     6
     /  \   /  \
    2   3  7    8
  */ 
  
  
  const root_false = new TreeNode(5);
  root_false.left = new TreeNode(4);
  root_false.right = new TreeNode(6);
  
  root_false.left.left = new TreeNode(2);
  root_false.left.right = new TreeNode(3);
  
  root_false.right.left = new TreeNode(7);
  root_false.right.right = new TreeNode(8);
  
  
  console.log(isValidBinarySearchTree(root_true))
  console.log('----------------------')
  console.log(isValidBinarySearchTree(root_false))
  