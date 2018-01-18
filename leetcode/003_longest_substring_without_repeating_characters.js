// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

let lengthOfLongestSubstring = function(str) {
  let longest = 0;
  let result = '';
  for (let i=0; i < str.length; i++){
    let preIndex = result.indexOf(str[i]);
    if (preIndex >= 0) {
      result = result.slice(preIndex + 1)
    }
    result += str[i];
    if (result.length > longest) {
      longest = result.length;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("bbbbb") === 1);
console.log(lengthOfLongestSubstring("pwwkew") === 3);
