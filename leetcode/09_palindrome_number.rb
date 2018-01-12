def is_palindrome(x)
    x - x.to_s.reverse.to_i == 0
end

p is_palindrome(10101) == true 
p is_palindrome(-122431) == false