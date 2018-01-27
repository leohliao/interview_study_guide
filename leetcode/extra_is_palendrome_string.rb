def is_palendrome?(str)
  idx1 = 0
  idx2 = -1
  
  while idx1 < str.length / 2
    return false if str[idx1] != str[idx2]
    idx1 += 1
    idx2 -= 1
  end
  
  true
end

p is_palendrome?("aca")
p is_palendrome?("baaa")
