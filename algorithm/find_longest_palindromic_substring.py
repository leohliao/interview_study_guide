"""
    Given a string, find the longest palindromic substring
"""

def longest_palindromic_substring(str):
    result = None
    for i in range(len(str)):
        for j in range(len(str), 0, -1):
            if i == j: 
                break
            word = str[i:j]
            if len(word) > 1:
                if word == word[::-1]:
                    if result:
                        if len(word) > len(result):
                            result = word
                    else:
                        result = word

    return result


print(longest_palindromic_substring("ABC") == None)
print(longest_palindromic_substring("YABCCBAZ") == "ABCCBA")