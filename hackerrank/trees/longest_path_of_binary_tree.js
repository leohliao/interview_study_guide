/*

Given a binary tree node, return the number of nodes in the longest path between the root and a leaf node

Input: Node in a Binary Tree
Output: Integer


     1
    /  \
   2    3
         \
          4


Output: 3

I:O
  - Input: null
  - Output: 0
  
-- Constraint:
  - Time: O(N) / Space: O(N)
  - input: will always be root

-- Diagram:
    root
     1
    /  \
   2    3
         \
          4

  //left_count
  current: 4
  count = 3

  // right_count
  current: 2
  count = 2
  
-- Pseudocode
  

  function countNode (current)
    if current === null
      return 0
    
    left_count = countNode(current.left) + 1
    right_count = countNode(current.right) + 1

    return Math.max(left_count, right_count)
  
  return countNode(root)
  
*/

class TreeNode {
    constructor (value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function longestPath(root) {
  
    function countNode (current) {
      if (current === null) {
        return 0;
      }
  
      let leftCount = countNode(current.left) + 1;
      let rightCount = countNode(current.right) + 1;
  
      return Math.max(leftCount, rightCount);
    }
  
    return countNode(root);  
  }
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.right = new TreeNode(4);
  
  console.log(longestPath(root));
  console.log('-------')
  console.log(longestPath(null));
  
  
  