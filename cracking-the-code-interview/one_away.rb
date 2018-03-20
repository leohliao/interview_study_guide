def one_away(str1, str2) 
  return false if (str1.length - str2.length).abs > 1 

  if str1.length > str2.length 
    longer, shorter = str1, str2
  else 
    longer, shorter = str2, str1
  end 

  long_counter = Hash.new(0)

  longer.chars.each do |ch|
      long_counter[ch] += 1 
  end 

  shorter.chars.each do |ch|
    long_counter[ch] -= 1 
    long_counter
  end 

  counter = 0 
  long_counter.values.each do |n|
    counter += n.abs
  end
  
  return false if counter > 1
  true 
end

p one_away("aaxnn", "aahnn") == false
p one_away("aaxxnn", "aahhhnn") == false
p one_away("ann", "aah") == false
p one_away("edg", "dg") == true
p one_away("palindromieee", "palidromieee") == true
p one_away("palindromieee", "palidromiee") == false

