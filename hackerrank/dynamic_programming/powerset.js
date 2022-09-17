/*
    Given a string S, return the powerset P(S), which is an array of all combinations of S

    Input: String
    Output: Array of Strings
    
    Test Cases:
    'abc' => ['', 'a', 'ab', 'abc', 'b', 'bc', 'c']
    '' => ['']
    'a' => ['', 'a']
    'ab' => ['', 'a', 'b', 'ab']

    Diagram:
    build and depth
                   ''                           0
            /               \
           ''               'a'                 1
        /    \            /    \
       ''    'b'        'a'    'b'              2
    /    \    /  \     /   \   /    \
   ''     c  b   bc   a    ac ab    abc         3

   Time Complexity: O(2^N)
   Space Complexity: O(2^N)

   N = input length

   Pseudocode Steps:
   1. State variables
   2. Return state variables
   3. instantiate and invoke helper method
   4. base case(s)
   5. recursive case(s)

*/ 
const powerset = (word) => {
    // 1. State variables
    const result = [];

    const findCombos = (build, depth) => {
        // 4. base case(s)
        if (depth === word.length) {
            result.push(build);
            return;
        }
        // 5. recursive case(s)
        // left
        findCombos(build, depth + 1);

        // right
        findCombos(build + word[depth], depth + 1);
    
    }
    // 3. instantiate and invoke helper method
    findCombos("", 0)
    // 2. Return state variables
    return result;
}

console.log(powerset('abc'));