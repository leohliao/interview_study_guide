/*
    49. Group Anagrams

    URL: https://leetcode.com/problems/group-anagrams/
    
    Given an array of strings strs, group the anagrams together. 
    You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Example 2:
    Input: strs = [""]
    Output: [[""]]

    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]

    -- Constraints:
    - 1 <= strs.length <= 104
    - 0 <= strs[i].length <= 100
    - strs[i] consists of lowercase English letters.

    -- Pseudocode:

       0.    1     2     3     4     5
    ["eat","tea","tan","ate","nat","bat"]

    unique = {}

    iterate thru strs
    currentWord = "eat"
    key = aet
    if unique[key]
        unique[key].push(currentWord)
    else
        unique[key] = [currentWord]

    return unique.values()

    // Clarifying Question
    // 1. empty elements
    // 2. array will have same length of elements?
    // 3. the number of letters in the matching elements must match?

*/ 


/*
 *
 * @param {string[]} strs
 * @return {string[][]}
 * 
 */

const groupAnagrams = (strs) => {
    if (strs.length === 1) {
        return [strs];
    }
    var map = new Map();
    
    for (var str of strs) {
        var key = str.split("").sort().join("");
        
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
}


console.log(groupAnagrams("")) // [[""]]
console.log(groupAnagrams(["","b"])) // [["b"],[""]]
console.log(groupAnagrams(["",""])) // [["",""]]
console.log(groupAnagrams(["ac","c"])) // [["c"],["ac"]]
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"])) // [["dgggggggggg"],["ddddddddddg"]]

if(strs.length === 1) return [strs];
let map = new Map();
for (let str of strs){
   let sorted = (Array.from(str).sort()).join("");
   if(!map.has(sorted)) map.set(sorted, [str]);
   else map.get(sorted).push(str);
}
return [...map.values()];