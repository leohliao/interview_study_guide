/*

# 303 - Longest Repeating Character Replacement

Given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

```
Input:  String, Integer
Output: Integer
```

# Example
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

# Constraints
```
S ~ input string
K ~ Number of operations

Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
```

`s` consists of English letters
*/ 