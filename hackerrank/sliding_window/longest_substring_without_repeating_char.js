/*
Longest Substring Without Repeating Characters
Given a string s, find the longest substring without repeating characters.

Input: String
Output: String

Input: abcabcbb      =>	Output: abc
Input: bbbbb	 	=>	Output: b
Input: pwwkew		=>	Output: wke

Input: "" => ""

--- Constraints:
  - All lowercases;
  - Time: O(N), Space O(M) *M being the specific characters

--- Diagram:
  0  1  2  3  4  5
  p  w  w  k  e  w
           i
                 j

  longest = "wke"
  counts = {p: 1, w: 1, k: 1, e: 1}
  repeatedCount = 0

--- Pseudo coding:
  
  - i, j = [0, 0]
  - counts {}
  - repeatedCount = 0
  - resultStr = ""

  while(j < str.length)
    rLetter = str[j]

    // hunter phase
    if rLetter in counts
      if (count[rLetter] > 1)
        count[rLetter] ++
        repeatedCount ++
    else:
      count[rLetter] = 1
      
    //catch phase
    while (repeatCount > 0)
      lLetter = str[i]
      if (count[lLetter])
        if (count[lLetter] > 1) 
          count[lLetter]--
          repeatedCount--
          resultStr = resultStr.slice(1, j+1)
      i ++
      
    resultStr = resultStr + rLetter;
    j++

  return str[i, j]
    
*/

const longest_substring = (str) => {
    let i = 0;
    let j = 0;
    const count = {};
    let repeated = 0;
    let resultStr = '';
    let longestResult = '';
  
    while (j < str.length) {
      const rLetter = str[j];
  
      if (rLetter in count) {
        count[rLetter]++;
        if (count[rLetter] > 1) {
          repeated++;
        }
        resultStr = resultStr + rLetter;
      } else {
        count[rLetter] = 1;
        resultStr = resultStr + rLetter;
      }
  
      while (repeated > 0) {
        const lLetter = str[i];
      
        if (count[lLetter] ) {
          if (count[lLetter] > 1) {
            repeated--;  
          }
          count[lLetter]--;
          resultStr = resultStr.slice(1, j + 1);
        }
        
        i++;
      }
  
      if (resultStr.length > longestResult.length) {
          longestResult = resultStr;
      }
      j++;
  
    }
  
    return longestResult;
  }
  
  
  console.log(longest_substring("pwwkew") === "wke");
  console.log(longest_substring("abcabcbb") === "abc");
  