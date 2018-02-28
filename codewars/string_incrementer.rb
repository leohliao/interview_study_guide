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
  return "1" if input.nil?

  numbers = Hash.new(0)
  10.times {|n| numbers[n.to_s]=true }
  idx = nil
  # iterate the input
  (0...input.length).each do |i|
    # find the index of the end of string
    if (numbers[input[i]]) == true
      idx = i
      break
    end 
  end
  # separate the string and the integer
  str = input[0..idx- 1]
  int = input[idx..-1]
  p str
  p int 
  # increment the integer
  # combine the string and integer again
end

# p increment_string("foo")#  == "foo1"
p increment_string("foobar001")# == "foobar002"
# p increment_string("foobar1")# == "foobar2"
# p increment_string("foobar00")# == "foobar01"
# p increment_string("foobar99")# == "foobar100"
# p increment_string("")# == "1"