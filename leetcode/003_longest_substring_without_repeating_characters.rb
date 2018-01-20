# Given a string, find the length of the longest substring without repeating characters.

# Examples:
# Given "abcabcbb", the answer is "abc", which the length is 3.
# Given "bbbbb", the answer is "b", with the length of 1.
# Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

def length_of_longest_substring(str) ## Does not pass LeetCode Test
  max_longest = ''
  current_longest = ''
  str.each_char do |letter|
    current_longest = "" if current_longest.index(letter)
    current_longest << letter 
    max_longest = current_longest if current_longest.length > max_longest.length 
  end
  max_longest.length 
end

p length_of_longest_substring("abcabcbb") === 3
p length_of_longest_substring("bbbbb") === 1
p length_of_longest_substring("pwwkew") === 3