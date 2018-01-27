# Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

# For example,
# "A man, a plan, a canal: Panama" is a palindrome.
# "race a car" is not a palindrome.

# Note:
# Have you consider that the string might be empty? This is a good question to ask during an interview.

# For the purpose of this problem, we define empty string as valid palindrome.

def is_palindrome?(s)
    # Trim out all the spaces
    # iterate the trimmed str, find the indices
    # check the first indices vs the last indices, 
    # if match then check next compare to second-to-the-last 
    # return false if it does not match
    # return true no iteration is completed
    
    trimmed_str = s.downcase.delete(' !\'`"?.,@#:\-;\(\)').chars
    length = trimmed_str.length / 2
    (0..length).each do |i|
        j = -1 - i
        if trimmed_str[i] != trimmed_str[j]
            return false 
        end
    end
    return true
end

p is_palindrome?("") == true 
p is_palindrome?("ab2a") == false 
p is_palindrome?("abba") == true 
p is_palindrome?("abb@") == false 
p is_palindrome?("c#dc") == true 
p is_palindrome?("A man, a plan, a canal: Panama") == true 
p is_palindrome?("Marge, let's \"went.\" I await news telegram.") == true 
p is_palindrome?("A man, a plan, a canal -- Panama") == true 
p is_palindrome?("Damosel, a poem? A carol? Or a cameo pale? (So mad!)") == true 
p is_palindrome?("`l;`` 1o1 ??;l`") == true