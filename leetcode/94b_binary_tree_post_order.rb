def post_order_traversal(node)
  return [] if node.nil?
  results = []
  results.concat(post_order_traversal(node.left))
  results.concat(post_order_traversal(node.right))
  results << node.val
  results
end


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


p post_order_traversal(root)