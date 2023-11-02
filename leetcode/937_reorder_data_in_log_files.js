/*
    Amazon:
    URL: https://leetcode.com/problems/reorder-data-in-log-files/

    You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

    There are two types of logs:

    Letter-logs: All words (except the identifier) consist of lowercase English letters.
    Digit-logs: All words (except the identifier) consist of digits.
    Reorder these logs so that:

    The letter-logs come before all digit-logs.
    The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
    The digit-logs maintain their relative ordering.
    Return the final order of the logs.

    

    Example 1:

    Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
    Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
    Explanation:
    The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
    The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
    Example 2:

    Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
    Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
    

    Constraints:

    1 <= logs.length <= 100
    3 <= logs[i].length <= 100
    All the tokens of logs[i] are separated by a single space.
    logs[i] is guaranteed to have an identifier and at least one word after the identifier.

*/ 

/**
 * @param {string[]} logs
 * @return {string[]}
 */

 const isLetterLog = (log) => {
    log = log.split(' ');
  
    if ("0123456789".indexOf(log[1][0]) > -1) {
      return false;
    } else {
      return true;
    }
  }
  
  // console.log(isLetterLog("g1 act car"));
  // console.log(isLetterLog("a1 10 90 20 30 10"));
  
  const sortLetterLog = (letterLog) => {
    let lib = {};
  
    // console.log("LETTER LOG: ", letterLog);
    let uniqueKeys = new Set();
    
    for (let i = 0; i < letterLog.length; i++) {
      let log = letterLog[i];
      let firstSpaceIndex = log.indexOf(' ');
      let key = log.slice(firstSpaceIndex + 1);
      let value = log.slice(0, firstSpaceIndex);
  
      if (key in lib) {
        lib[key].push(value);
      } else {
        lib[key] = [value];
      }
  
      uniqueKeys.add(key);
    }
  
    let uniqueKeyArr = Array.from(uniqueKeys);
    uniqueKeyArr = uniqueKeyArr.sort();
  
    let result = [];
  
    // console.log("LIBRARY: ", lib);
    // console.log("UNIQUE KEY ARRAY: ", uniqueKeyArr);
    
    for (let i = 0; i < uniqueKeyArr.length; i++) {
      let key = uniqueKeyArr[i];
      lib[key] = lib[key].sort();
  
      for (let j = 0; j < lib[key].length; j++) {
        let identifier = lib[key][j];
  
        result.push(identifier + ' ' + key);
      }
    }
    
    return result;;
  }
  
  
  var reorderLogFiles = function(logs) {
    let letterLog = [];
    let digitLog = [];
  
    for (let log of logs) {
      if (isLetterLog(log)) {
        letterLog.push(log);
      } else {
        digitLog.push(log);
      }
    }
  
    letterLog = sortLetterLog(letterLog);
  
    // console.log("LETTER LOG: ", letterLog);
    // console.log("DIGIT LOG: ", digitLog);
  
    return letterLog.concat(digitLog);
  };
  
  // let test = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"];
  let test = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"];
  
  console.log(reorderLogFiles(test));
  
  
  /*
  
  
  
  ['act car', 'act car']
  
  lib = {
    'act car' = ['a2', 'g1']
  }
  
  
  
  
  ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
  
  
  "g1 act car" => ["g1", "act", "car"]
  "a1 1 9 2 3 1" => ["a1", "1", "9", "2", "3", "1"]
  
  lettersLog = []
  
  digitsLog = []
  
  
  
  Notes: 
  
  - Create a log of letters and a log for digits
  - To identify type, split with spaces, and check the index 1 element
  - sort the lettersLog
     - for comparison, use the string following the first space 
  
  - concat the lettersLog and digitsLog