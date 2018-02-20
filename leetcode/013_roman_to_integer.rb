# Given a roman numeral, convert it to an integer.

# Input is guaranteed to be within the range from 1 to 3999.

def roman_to_int(s)
  # Declare a variable with converting info from roman to integer
  roman = {
    "I" => 1,
    "V" => 5,
    "X" => 10,
    "L" => 50,
    "C" => 100,
    "D" => 500,
    "M" => 1000
  }
  # Declare a count variable for adding up numbers
  counts = 0
  # Iterate each letters in the array
  (0...s.length-1).each do |idx|
    # If the next number is small than the current one, add the number to the counts
    if roman[s[idx]] < roman[s[idx+1]]
      counts -= roman[s[idx]]
    else
      counts += roman[s[idx]]  
    # else minus the number from the counts
    end
  # return the counts
  end
  counts += roman[s[-1]]

end

p roman_to_int("DCXXI") == 621

# Time Complexity: O(n) - we iterate each items in the string once