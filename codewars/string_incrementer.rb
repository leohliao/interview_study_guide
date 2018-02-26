# Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

# Examples:

# foo -> foo1

# foobar23 -> foobar24

# foo0042 -> foo0043

# foo9 -> foo10

# foo099 -> foo100

# Attention: If the number has leading zeros the amount of digits should be considered.

def increment_string(input)
  # declare a str and int variable
  str = ""
  int = 0 
  int_idx = 0
  # iterate the input
  (0...input.length).each do |i|
    # find the index of the end of string
    if (input[i].to_i).is_a?(Integer)
      int_idx = i
    end 
  end
  str = input[0..int_idx]
  int = input[int_idx+1..-1].to_i 
  # separate the string and the integer
  # increment the integer
  p str 
  p int_idx
  # int_idx += 1
  # combine the string and integer again
  # str + int.to_s
end

# p increment_string("foo")#  == "foo1"
p increment_string("foobar001")# == "foobar002"
# p increment_string("foobar1")# == "foobar2"
# p increment_string("foobar00")# == "foobar01"
# p increment_string("foobar99")# == "foobar100"
# p increment_string("")# == "1"