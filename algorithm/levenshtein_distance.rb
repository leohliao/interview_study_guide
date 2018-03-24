def levenshtein_distance(string_i, string_ii)
  length_i = string_i.length
  length_ii = string_ii.length

  return length_i if length_ii == 0
  return length_ii if length_i == 0

  # Create a matrix using string lengths + 1, with nil value
  dimension = Array.new(length_i+1) {Array.new(length_ii+1)} 

  # Replace the first column value in each row with first string length number
  (0..length_i).each {|i| dimension[i][0] = i}
  
  # Replace the first row value in with second string length 
  (0..length_ii).each {|j| dimension[0][j] = j}
  
  (1..length_ii).each do |j|
    (1..length_i).each do |i|
      # adjust index into string
      dimension[i][j] = 
        if string_i[i-1] == string_ii[j-1]  
          # no operation required   
        else
          [ dimension[i-1][j]+1,    # deletion
            dimension[i][j-1]+1,    # insertion
            dimension[i-1][j-1]+1,  # substitution
          ].min
        end
    end
  end
  dimension[length_i][length_ii]
end

# [ ['fire','water'], ['amazing','horse'], ["bamerindos", "giromba"] ].each do |s,t|
#   puts "levenshtein_distance('#{s}', '#{t}') = #{levenshtein_distance(s, t)}"
# end

puts levenshtein_distance('fire', 'water') == 4
# puts levenshtein_distance('amazing', 'horse') == 7
# puts levenshtein_distance('bamerindos', 'giromba') == 9

## Source Code : http://rosettacode.org/wiki/Levenshtein_distance#Ruby


## Answer 2:
# Levenshtein distance, translated from wikipedia pseudocode by ross
# def lev s, t
#   return t.size if s.empty?
#   return s.size if t.empty?
#   return [ (lev s.chop, t) + 1,
#            (lev s, t.chop) + 1,
#            (lev s.chop, t.chop) + (s[-1, 1] == t[-1, 1] ? 0 : 1)
#        ].min
# end