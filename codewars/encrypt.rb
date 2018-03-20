def encrypt(text, n) 
 return text if n <= 0 
  return nil if text == nil 
  return "" if text == "" 
  arr = text.chars 
  n.times do 
  other_letter = arr.select.with_index { |e, i| i.odd? } 
  remainder = arr.select.with_index { |e, i| i.even? } 
  @result = other_letter.join << remainder.join 
  arr = other_letter + remainder 
 end 
 @result 
end