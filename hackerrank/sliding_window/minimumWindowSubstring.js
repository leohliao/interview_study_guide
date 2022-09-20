/*
    Minimum Window Substring

    Given a string, and a set of characters
    return the substring representing the SMALLEST window containing those characters

    I/O:
    Input:  fullString {String}
            chars {String}
    Output: {String}

    Example:
        Input: "ADOBECODEBANC", "ABC"
        Output: "BANC"

    Example:
        Input: "HELLO WORLD", "FOO"
        Output: ""
    
    * Assume that there won't be repeated character in the second string string input
    * Ignore capitalization
    
    Diagram:

            word                   target

    A D O B E C O D E B A N C       A B C
    --------->
      --------------->
        ---------------->
         ----------------->
           ----------------->
                      ------>
    Rec: O(N^2N)
    Memoization: O(N^3)
    // Better approach
    Sliding: O(N^2) => compare the slices [0, 5],[8, 12], [9, 12]

    Diagram (Solution):

            word                        target
    0 1 2 3 4 5 6 7 8 9 10 11 12
    A D O B E C O D E B A  N  C         A B C

    L
    R

    Counts:
     A: 1
     B: 1
     C: 1
    or missing_char = 3

    Hunting Phase(R):                 Catchup Phase (L)

    
*/ 

function minimumWindowSubstring(word, target) {
    let left = 0;
    let right = 0;
    let result = [1, Infinity];
    
    const counts = {};
    let missingChar = target.length;

    for (let i = 0; i < target.length; i++) {
        let char = target[i];
        if (char in counts) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    while (right < word.length) {
        if (missingChar > 0) {
            // hunting phase
            let rChar = word[right];
            if (rChar in counts) {
                if (counts[rChar] > 0) {
                    missingChar--;
                }
                counts[rChar]--;
            }
        }
        //catch phase
        while (missingChar === 0) {
            if ((right - left) < (result[1] - result[0])) {
                result = [left, right];
            }

            let lChar = word[left];
            if (lChar in counts) {
                counts[lChar]++;
                if (counts[lChar] > 0) {
                    missingChar++;
                }
            }
            left++;
        }


        right++;
    }
    console.log('result: ', result)
    if (result[1] === Infinity) {
        return "";
    } else {
        return word.slice(result[0], result[1] + 1);
    }
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC") === "BANC")
console.log(minimumWindowSubstring("HELLO WORLD", "FOO") === "")