def is_symmetric(root)
  q = Queue.new
  q.push(root)
  q.push(root)
  until q.empty?
    t1 = q.shift
    t2 = q.shift
    next if t1 == nil && t2 == nil
    return false if t1 == nil || t2 == nil
    return false if t1.val != t2.val
    q.push(t1.left)
    q.push(t2.right)
    q.push(t1.right)
    q.push(t2.left)
  end
  return true
end
