# Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.

class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next = nil
  end 

end

a = Node.new('A')
b = Node.new('B')
c = Node.new('C')
a.next = b
b.next = c 


def delete_node(node)
  next_node = node.next 
  if next_node
    node.value = next_node.value 
    node.next = next_node.next
  else
    raise "Can't Delete the last node with this technique"
  end
end

p delete_node(b)
p a 
p b
p c

#O(1) time and O(1)O(1) space.
# But be careful—there are some potential problems with this implementation:

# First, it doesn't work for deleting the last node in the list. We could change the node we're deleting to have a value of nil, but the second-to-last node's @next pointer would still point to a node, even though it should be nil. This could work—we could treat this last, "deleted" node with value nil as a "dead node" or a "sentinel node," and adjust any node traversing code to stop traversing when it hits such a node. The trade-off there is we couldn't have non-dead nodes with values set to nil. Instead we chose to throw an exception in this case.

# Second, this technique can cause some unexpected side-effects. For example, let's say we call:
# There are two potential side-effects:

# Any references to the input node have now effectively been reassigned to its @next node. In our example, we "deleted" the node assigned to the variable b, but in actuality we just gave it a new value (2) and a new @next! If we had another pointer to b somewhere else in our code and we were assuming it still had its old value (8), that could cause bugs.
# If there are pointers to the input node's original next node, those pointers now point to a "dangling" node (a node that's no longer reachable by walking down our list). In our example above, c is now dangling. If we changed c, we'd never encounter that new value by walking down our list from the head to the tail.