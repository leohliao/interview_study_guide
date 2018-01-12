# Determine whether an integer is a palindrome. Do this without extra space.

def is_palindrome(x)
    # x - x.to_s.reverse.to_i == 0

    # First we handle some edge cases:
    ## if x is negative then false
    ## if x is not 0 and x is divisible by 10 (eg. 260) then false 
    return false if (x < 0 || (x % 10 == 0 && x !=0))

    # declare a variable with counter of 0
    revertedNumber = 0 
    # increment that counter variable until x > counter 
    # decrement the x variable until X > counter 
    while x > revertedNumber
        revertedNumber = revertedNumber * 10 + x % 10;
        x/=10;
    end 

    # in the end, return true if satisfy the condition that x equals to counter
    # or counter divide by 10 is x 
    return x == revertedNumber || x == revertedNumber/10
end

p is_palindrome(10101) == true 
p is_palindrome(-122431) == false