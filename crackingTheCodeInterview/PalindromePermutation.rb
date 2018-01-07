
def palindromePermutation?(string)
  ## Deleting the space
  str = string.delete(' ')
  ## Define a hash, and turn into hash
  letters = {}
  str.chars.each do |ch| 
    if letter[ch] 
      letter[ch] +=1 
    else
      letter[ch] = 1
    end 
  end

  if str.length.even?
    return false if letters.values.any? {|x| x.even? }
  else 
    count = 0 
    letters.values.each do |value|
      if value % 2 != 0 
        return false if value %2 != 1
        count += 1 
      end 
    end
    return false if count > 1
  end 

  return true 
end 

p palindromePermutation?('hib aih')


