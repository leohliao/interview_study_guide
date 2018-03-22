def levenshtein_distance(string_i, string_ii)
  m = string_i.length
  n = string_ii.length
  return m if n == 0
  return n if m == 0
  d = Array.new(m+1) {Array.new(n+1)}

  (0..m).each {|i| d[i][0] = i}
  (0..n).each {|j| d[0][j] = j}
  (1..n).each do |j|
    (1..m).each do |i|
      d[i][j] = if string_i[i-1] == string_ii[j-1]  # adjust index into string
                  d[i-1][j-1]       # no operation required
                else
                  [ d[i-1][j]+1,    # deletion
                    d[i][j-1]+1,    # insertion
                    d[i-1][j-1]+1,  # substitution
                  ].min
                end
    end
  end
  d[m][n]
end

[ ['fire','water'], ['amazing','horse'], ["bamerindos", "giromba"] ].each do |s,t|
  puts "levenshtein_distance('#{s}', '#{t}') = #{levenshtein_distance(s, t)}"
end

levenshtein_distance('fire', 'water') == 4
levenshtein_distance('amazing', 'horse') == 7
levenshtein_distance('bamerindos', 'giromba') == 9

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