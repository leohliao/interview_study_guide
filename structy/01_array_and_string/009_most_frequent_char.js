/*
most frequent char
Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

test_00:
mostFrequentChar('bookeeper'); // -> 'e'
test_01:
mostFrequentChar('david'); // -> 'd'
test_02:
mostFrequentChar('abby'); // -> 'b'
test_03:
mostFrequentChar('mississippi'); // -> 'i'
test_04:
mostFrequentChar('potato'); // -> 'o'
test_05:
mostFrequentChar('eleventennine'); // -> 'e'
test_06:
mostFrequentChar("riverbed"); // -> 'r'
*/ 
const mostFrequentChar = (s) => {
    let unique = new Map();
    
    for (let letter of s) {
      if (unique.has(letter)) {
        unique.set(letter, unique.get(letter) + 1);
      } else {
        unique.set(letter, 1);
      }
    }
    let maxCount = -1;
    let maxLetter = null;
    
    unique.forEach((value, key) => {
      if (value > maxCount) {
        maxLetter = key;
        maxCount = value;
      }
    })
    return maxLetter;
  };

  mostFrequentChar('mississippi'); // -> 'i'
  mostFrequentChar('eleventennine'); // -> 'e'
  mostFrequentChar('potato'); // -> 'o'
  mostFrequentChar('abby'); // -> 'b'