/*
    # 302 - Shortest Substring With 3 Unique Characters

    Given a string, return the shortest substring that has at least 3 unique
    characters, or false if there is no such string

    ```
    Input: String
    Output: String or Boolean
    ```

    # Example
    ```
    Input: aabaca => Output: bac
    Input: abaacc => Output: baac
    Input: abc => Output: abc
    Input: aabb => Output: False
    ```

    # Constraints
    ```
    N ~ Length of input string
    K ~ Number of unique characters in input string

    Time Complexity: O(N)
    Auxiliary Space Complexity: O(K)
    ```

    `s` consists of English letters
    



    Input: String
    Output: String or Boolean

    Input: aabaca => Output: bac
    Input: abaacc => Output: baac
    Input: abc => Output: abc
    Input: aabb => Output: False
    Input: ab => Output: False

    -- Constraints:
    - All lowercases
    - Open-end for time and space

    -- Diagram
    index:   0  1  2  3  4  5
    string:  a  a  b  a  c  a
                i
                        j
    i = 1
    j = 3
    substring = ""
    uniqueCount = {a: 2, b: 1}
    repeatCount = 1

    -- Pseudocode
    i, j = 0, 0
    uniqueCount = {}
    repeatedCount = 0
    substring = ""

    if str.length > 3 return false

    while j < str.length
        letterR = str[j]
        
        if letterR in uniqueCount
        uniqueCount[letterR]++
        
        if uniqueCount[letterR] > 2
            repeatCount++
        else 
            subtring = substring + letterR;        
        else
        uniqueCount[letterR] = 1
        subtring = substring + letterR;
        
    
        while repeatCount > 0
        letterL = str[i]
        
        if uniqueCount[letterL] > 2
            substring = substring.slice (1, j + 1)
            uniqueCount[letterL]--
            repeatCount--  
            
        i++
        
        
        j++


    substring.length > 2
        return substring
    else
        return false
  
*/ 