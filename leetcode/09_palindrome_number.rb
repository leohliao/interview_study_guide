# Determine whether an integer is a palindrome. Do this without extra space.

def is_palindrome(x)
    # x - x.to_s.reverse.to_i == 0

    return false if (x < 0 || (x % 10 == 0 && x !=0))
    revertedNumber = 0 
    while x > revertedNumber
        revertedNumber = revertedNumber * 10 + x % 10;
        x/=10;
    end 
    return x == revertedNumber || x == revertedNumber/10
end

p is_palindrome(10101) == true 
p is_palindrome(-122431) == false