
/*
    # Why do you want to leave your current company? Or, why did you leave your last company? Or, Did you get a full time offer after your internship?

    Should take one minute; minute and a half at most

    ##### Prompt

    Say: "Why do you want to leave your current company? Or, why did you leave your last company? Or, did you get a full time offer after your internship?"

    ##### Do you hear these things?

    - *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
    - Technical Skills (libraries, languages, etc.)
    - Interpersonal Skills  


    - *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?


    - *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

    # 315 - Longest Palindromic Subsequence

    Given a string of lowercase characters (a-z), return the
    length of the longest palindromic subsequence.

    Subsequence:
    a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

    For example, the sequence ⟨A, B, D⟩ is a subsequence of ⟨A, B, C, D, E, F⟩ obtained after removal of elements C, E, and F.

    https://en.m.wikipedia.org/wiki/Subsequence

    ```
    Input: {String}
    Output: {Integer}
    ```

    # Example

    ```
    Input:  "vtvvv"
    Output: 4

    Longest palindromic subsequence here is "vvvv"


    Input:  "pwnnb"
    Output: 2

    Longest palindromic subsequence here is "nn"


    Input:  "ttbtctcbt"
    Output: 7

    Longest palindromic subsequence here is "tbtctbt"
    ```

    # Constraints

    ```
    Time Complexity:			        O(N^2)
    Auxiliary Space Complexity: 		O(N^2)
    ```

    # Solution

    Please reference the diagrams for the recursive tree implementation. This
    implementation operates off of the "ttbtctcbt" input. Think of it as a shrinking
    window problem with both of the pointers beginning at the distal ends of the
    string. (To clue the interviewee to this, you can bring up how we verify if a
    single word is a palindrome (two pointer approach), and then ask how we can use
    a similar approach to bring in our pointers). 

    The overall idea here is to operate off of the idea of the
    smallest possible cases. Imagine we have a single character.
    We already know that the answer for this is going to be `1`.
    This is going to be one of the base cases.

    Now imagine a slightly larger case to have two characters.
    There are two possible options:

    - Characters match => Longest palindromic subsequence length
    is `2`
    - Characters do not match => Longest palindromic
    subsequence length is `1`

    All of the cases we've mentioned so far will form the
    basis of our base cases later on in our helper method.

    As far as where we begin, we'll always be comparing the
    distal (left-most and right-most) characters of whichever
    string we're inspecting. If the characters match, we know
    for sure that however long the Longest Palindromic
    Subsequence is, it must have a length of at least `2`.
    From here, we'll search inwards to see if there are more
    matches. If they don't match, this means that the Longest
    Palindromic Subsequence will lie somewhere farther in,
    maybe using either the left-most or right-most characters.

    Let's get to the steps of helper method recursion that our
    function will follow:

    1. Instantiate a cache
    - The keys will be strings representing two pointers
    - The values will be integers representing the best
        answer for the range covered by those two pointers.
    2. No need to return any state variables. We'll be instead
    returning the function call.
    3. Instantiate a helper method called `find`. This helper
    method wants to find the length of the longest
    palindromic subsequence
    - There are two arguments for `find`. Both are integers.
        We'll call them `left` and `right`.
    - Invoke the helper method with `left` set to zero, and
        `right` set to the length of the input string minus one
    4. Base cases
    - If left and right are both on the same index, return 1
    - If left and right are one index away from either,
        check the characters they are in the string.
        - If same, return 2
        - If different, return 1
    5. Recursive cases - If we pass the base cases, this means
    the pointers are two or more indexes away from each
    other. Two scenarios here for recursion:
    - Left and right characters are the same => Return 2
        plus recursive call of `find` on `left+1` and
        `right-1`
    - Left and right characters are not the same => Return
        the max of either the recursive call of `find` on
        `left + 1, right` or `left, right - 1`.

    Note: To make use of the cache, simply cache the results
    of the recursive calls before returning them. Additionally,
    introduce a base case to check the cache if you've arrived
    at left/right pointer coordinates that have already been
    visited. In this case, simply return whatever is in the
    cache.

    ----- Diagram

    ""
*/ 

const longest_palindromic_substring = (str) => {
    const findPalindrome = (left, right) => {
        console.log('left: ', left)
        console.log('right: ', right)
        if (left === right) {
            return 1;
        } else if (left === right - 1 && str[left] === str[right]) {
            return 2;
        } else if (str[left] === str[right]) {
            return 2 + findPalindrome(left + 1, right - 1);
        }
        const count = Math.max(findPalindrome(left+1, right), findPalindrome(left, right-1));
        console.log("count: ", count);
        return count;
        
    }
    return findPalindrome(0, str.length - 1);
}

console.log(longest_palindromic_substring("vtvvv")) // 4  vvvv
// console.log(longest_palindromic_substring("pwnnb")) // 2  nn
// console.log(longest_palindromic_substring("ttbtctcbt")) // 7 ttbtctcbt


// Given a string of lowercase characters (a-z), return the length of the longest palindromic subsequence.

// Subsequence: a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// For example, the sequence ⟨A, B, D⟩ is a subsequence of ⟨A, B, C, D, E, F⟩ obtained after removal of elements C, E, and F.

// https://en.m.wikipedia.org/wiki/Subsequence

// Input: {String}
// Output: {Integer}
// Example

// Input:  "vtvvv"
// Output: 4

// Longest palindromic subsequence here is "vvvv"


// Input:  "pwnnb"
// Output: 2

// Longest palindromic subsequence here is "nn"


// Input:  "ttbtctcbt"
// Output: 7

// Input:  ""
// Output: "Please enter input"

// Input:  "a"
// Output: 1

// ---- Constraints
// No constraints

// Longest palindromic subsequence here is "tbtctbt"

/*
  ----- Diagram
       i        
  "p w n n b"
         j 

                            [0 , 4]
                    / i++              \ j--
                [1, 4]                   [1, 3]
            /            \
          [2, 4]         [1, 3]
        /         \            /       \    
    [3, 4]        `[2, 3]`     [2, 3]   [1, 2]
    /     \        /      \
  [4, 4]   [3, 3] [3, 3]   [2, 2]  

  ----- Psuedo code

  func find_longest_palindrome(str)
      const cache = {}
      findPal = (left, right)
        const key left + right (str)
        if (cache[key]) {
          return cache[key]
        }
        
        // base
        if (left === right) {
            return 1;
        } else if (left === right - 1 && str[left] === str[right - 1]) {
            return 2;
        }
        
        // recusrive cases
        if (str[left] === str[right]) {
           return 2 + findPal(left + 1, right - 1);
        }
        const leftCount = findPal(left + 1, right);
        const rightCount = findPal(left, right - 1)
        cache[key] = Math.max(leftCount, rightCount);
        return cache[key]
  
      result = findPal(0, str.length - 1)
        
      return result
  
*/ 

const find_longest_repl = (str) => {
    const cache = {};
  
    const findPal = (left, right) => {
      const key = left + "_" + right;
      if (cache[key]) {
        return cache[key]
      }
      if (left === right) {
        return 1;
      } else if (left === right - 1 && str[left] === str[right]) {
        return 2;
      }
  
      if (str[left] === str[right]) {
         cache[key] = 2 + findPal(left + 1, right - 1);
         return cache[key];
      }
      const leftCount = findPal(left + 1, right);
      const rightCount = findPal(left, right - 1)
      cache[key] = Math.max(leftCount, rightCount);
      return cache[key];
    }
    
    return findPal(0, str.length - 1);
  }
  
  console.log(find_longest_repl("vtvvv"))
  console.log(find_longest_repl("pwnnb"))
  console.log(find_longest_repl("ttbtctcbt"))