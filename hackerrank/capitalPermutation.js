/*

# 231 - Capital Permutations

Given a string `str` of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.

### Advanced

Solve the same problem, except now you may have number characters in your string (which don't have a lowercase or uppercase, but should still be included in your result) and capital letters, that need to be lowercased.  


```
Input: str (String)
Output: [Str] (Array of Strings)
```

# Example

```
Input: "abc"
Output: ["ABC", "ABc", "AbC", "aBC", "Abc", "aBc", "abC", "abc"]


Advanced:

Input: "A1d3"
Output: ["A1D3", "a1D3", "A1d3", "a1d3"]
```

# Constraints

```
Time Complexity: O(2^N)
Space Complexity: O(2^N)
```

The order of the strings in the final result does not matter.

In the basic solution, all the input characters will be lowercase letters.

In the advanced solution, the input characters can be uppercase letters and numbers too.

----- Diagram:
                                        ""
                            /                        \
                          'a'                        'A'
                  /           \                /           \
               'ab'          'aB'           'Ab'          'AB'
            /         \      /    \         /     \         /    \ 
       'abc'        'abC'   'aBc'  'aBC'  'Abc'    'AbC'   'ABc'  'ABC'
        

* 1) Instantiate a `result` array, and return it at the end.
* 2) Declare a recursive helper function called `permute` that takes two arguments `substr` and `depth`, and invoke this function with an empty string and `0`.
* 3) The base case when `depth` is equal to the lenght of the input `str`, push whatever `substr` you've built up so far into `result` and return.
* 4) The recursive cases to handle are

*/ 

function captialPermutationsBasic(str) {  //Given a string of letters in lowercase
    let result = [];
  
    function permute(substr, depth) {
      if(depth === str.length) {
        result.push(substr);
        return;
        }
        
        permute(substr + str[depth], depth + 1);
        permute(substr + str[depth].toUpperCase(), depth + 1);
      console.log('result: ', result);
    }
  
    permute("", 0);
  
    return result;
  }
  
  console.log(captialPermutationsBasic("abc"));