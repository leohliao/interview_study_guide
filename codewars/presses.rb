def presses(phrase)
  layout = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0']
  phrase.upcase.chars.map {|x| layout.select {|y| y.include?(x)}[0].chars.index(x) + 1}.reduce(:+)
end


def presses(phrase)
  groups = ["1", " 0", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "TUV8", "PQRS7", "WXYZ9"]
  phrase.upcase.chars.map do |c|
    1 + groups.find { |grp| grp.include?(c) }.index(c)
  end.reduce(:+)
end