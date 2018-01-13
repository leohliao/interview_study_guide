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

def inorder_traversal(root)
  ## Recursive solution
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
