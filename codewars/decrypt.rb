def decrypt(encrypted_text , n)
  return encrypted_text if n <=0
  return nil if encrypted_text == nil
  return "" if encrypted_text == ""
  x = encrypted_text
  n.times do
    answer = []
    part1, part2 = x.slice!(0...(x.length/2)).split(''), x.split('')
      while part2.count >= 1 do
        answer = answer << part2.shift << part1.shift
        x = answer.join
      end
  end
  x
end