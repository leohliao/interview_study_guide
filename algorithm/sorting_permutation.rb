def perm(array)
  return [array] if array.length == 1
  first = array.shift 
  perms = perm(array)
  total_perm = []

  perms.each do |p|
    (0..p.length).each do |i|
      total_perm << p[0...i] + [first] + p[i..-1]
    end 
  end
  total_perm
end 


p perm([1,2,3])