# Given a binary tree, return the inorder traversal of its nodes' values.
# 
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
    return [] if root.nil?
    result = []
    result.concat(inorder_traversal(root.left))
    result << root.val
    result.concat(inorder_traversal(root.right))
    result
end

