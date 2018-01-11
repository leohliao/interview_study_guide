def max_depth(root)
  return 0 if root.nil?
  l_depth = max_depth(root.left)
  r_depth = max_depth(root.right)
  l_depth > r_depth ? l_depth + 1 : r_depth + 1
end


