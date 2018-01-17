# Visual Aid w/ indices of results:
#      I            0
#     / \          / \
#    O   H        1   2
#   / \ / \      / \ / \
#  L  R T  M    3  4 5  6
# / \          / \
#A   G        7   8
# result for breadth-first traversal
# breadth_first(root) => ["I", "O", "H", "L", "R", "T", "M", "A", "G"]
# The method that I am familiar with is to use a queue. 
# A queue is a data structure in which you add items onto the end of it 
# and remove items from the beginning, also known as a FIRST-IN-FIRST-OUT 
# (FIFO) structure. We can use a ruby array to act like a queue.

# The solution involves first adding the root node to the queue 
# continue a loop while the queue is not empty. 
# Call shift on the queue which returns the next node, 
# then add that nodes left child if it exists and that nodes right child if it exists. 
# The value of the next node is added to results immediately after it's polled from the queue.

def breadth_first(node)
  results = []
  queue = Queue.new
  # queue = [] // will also works
  return [] if node.nil?
  # add node to queue
  queue << node 
  # while queue is not empty continue to loop
  while !queue.empty?
    # take the node out from the left side of the queue
    next_node = queue.shift
    # pass the node value into the results
    results << next_node.val
    # KEY!! continue to filling the queue
    if !next_node.left.nil?
      queue << next_node.left
    end
    if !next_node.right.nil?
      queue << next_node.right
    end 
  end 
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

node = TreeNode.new("I")
node.left = TreeNode.new("O")
node.right = TreeNode.new("H")
node.left.left = TreeNode.new("L")
node.left.right = TreeNode.new("R")
node.left.left.left = TreeNode.new("A")
node.left.left.right = TreeNode.new("G")
node.right.left = TreeNode.new("T")
node.right.right = TreeNode.new("M")

p breadth_first(node)