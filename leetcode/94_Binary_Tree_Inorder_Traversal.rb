# Given a binary tree, return the inorder traversal of its nodes' values.
# https://leetcode.com/problems/binary-tree-inorder-traversal/description/
# For example:
# Given binary tree [1,null,2,3],
# return [1,3,2]

# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

## Recursive solution
def inorder_traversal(root)
    #Base: when root is at the end
    return [] if root.nil?
    #Declare empty array
    result = []
    #push recursive call of root.left
    result.concat(inorder_traversal(root.left))
    #push root vale itself
    result << root.val
    #push recursive call of root.right
    result.concat(inorder_traversal(root.right))
    # return result 
    result
end

#Time Complexity: O(n). The acutal recursvie function is T(n) = 2 * T(n/2) + 1
#Space Complexity: Worst case space O(n). Average O(log(n))

## Iterating method using Stack // Needs improvement
def inorder_traversal_i(root)
    # declare a queue (Stack)'
    # declare an array variable
    # until root.value.nil? 
      # push all the left nodes to the stack
    # once reach to root.value, push stack value to array  
    arr = []
    stack = Queue.new 
    currentNode = root
    while (!currentNode.nil? || !stack.empty?)
      while !currentNode.nil?
        stack.push(currentNode)
        currentNode = root.left
      end 
      currentNode = stack.pop 
      arr.push(currentNode.val)
      currentNode = currentNode.right 
    end 
    return arr

end

#Time Complexity: O(n). The acutal recursvie function is T(n) = 2 * T(n/2) + 1
#Space Complexity: Worst case space O(n). Average O(log(n))

# Test Case 
class TreeNode
  attr_reader :val
  attr_accessor :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

root = TreeNode.new(1)
root.right = TreeNode.new(2)
root.right.left = TreeNode.new(3)


p inorder_traversal(root)