/* 
-- Diagram:
Example 1:

        5
      /   \
     3     7
   /  \   /  \
  2   4  6    8
  Result:

        5
      /   \
     7     3
   /  \   /  \
  8   6  4    2

=======================

        5
      /   \
     4     6
   /  \   / 
  2   3  7   
  
  Result:
        5
      /   \
     6     4
      \   / \
      7  3   2
       
      5 [4, 6] => [6, 4]
      4 [2, 3] => 
      6 [7, null]

-- Pseudocode

  if root === null return null
  

  func flip(current)
     if current === null return;

     leftNode = current.left
     rightNode = current.right
     
     current.left = rightNode
     current.right = leftNode

     flip(current.left)
     flip(current.right)
     
   
  flip(root)
   
   return root
       
*/

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

        5
      /   \
     7     3
   /  \   /  \
  8   6  4    2
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
   /  \   / 
  2   3  7    

        5
      /   \
     6     4
      \   / \
      7  3   2
*/ 


const root_false = new TreeNode(5);
root_false.left = new TreeNode(4);
root_false.right = new TreeNode(6);

root_false.left.left = new TreeNode(2);
root_false.left.right = new TreeNode(3);

root_false.right.left = new TreeNode(7);
// root_false.right.right = new TreeNode(8);




function flipBinaryTree(root) {
  if (root === null) {
    return null;
  }

  function flip(current) {
    if (current === null) {
      return;
    }

    const leftNode = current.left;
    const rightNode = current.right;

    current.left = rightNode;
    current.right = leftNode;

    flip(current.left);
    flip(current.right);
    
  }

  flip(root);
  return root;
}

console.log(flipBinaryTree(root_true))
console.log('----------------------')
console.log(flipBinaryTree(root_false))