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
  return "1" if input.empty?

  numbers = Hash.new(0)
  10.times {|n| numbers[n.to_s]=true }
  idx = nil
  str, int = ""
  
  # iterate the input
  (0...input.length).each do |i|
    # find the index of the end of string
    if (numbers[input[i]]) == true
      idx = i
      break
    end 
  end
  # separate the string and the integer
  return input + "1" if idx.nil?

  str = input[0..idx-1]
  int = input[idx..-1]
  
  # increment the integer
  parsed_int = parseInt(int)

  # combine the string and integer again
  return str + parsed_int
  
end

def parseInt(str)
  parsed_int = ""
  zero_counts = 0 
  (0...str.length).each do |i|
    if str[i] === "0"
      zero_counts += 1
    end
  end 

  inc_str = (str.to_i + 1).to_s
  if inc_str.length > str.delete("0").length
    zero_counts -= (inc_str.length - str.delete("0").length)
  end
  
  zero_counts.times {|i| parsed_int << "0"}
  parsed_int << inc_str
  parsed_int
end

p increment_string("foo") == "foo1"
p increment_string("foobar001") == "foobar002"
p increment_string("foobar1") == "foobar2"
p increment_string("foobar00") == "foobar01"
p increment_string("foobar99") == "foobar100"
p increment_string("") == "1"