def is_palindrome?(str)
  idx1 = 0
  idx2 = -1
  
  while idx1 < str.length / 2
    return false if str[idx1] != str[idx2]
    idx1 += 1
    idx2 -= 1
  end
  
  true
end

p is_palindrome?("aca")
p is_palindrome?("baaa")
