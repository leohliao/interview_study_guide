/*
anagrams
Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

test_00:
anagrams('restful', 'fluster'); // -> true
test_01:
anagrams('cats', 'tocs'); // -> false
test_02:
anagrams('monkeyswrite', 'newyorktimes'); // -> true
test_03:
anagrams('paper', 'reapa'); // -> false
test_04:
anagrams('elbow', 'below'); // -> true
test_05:
anagrams('tax', 'taxi'); // -> false
test_06:
anagrams('taxi', 'tax'); // -> false
test_07:
anagrams('night', 'thing'); // -> true
test_08:
anagrams('abbc', 'aabc'); // -> false
test_09:
anagrams('po', 'popp'); // -> false
test_10:
anagrams('pp', 'oo') // -> false

*/ 

const anagrams = (s1, s2) => {
  
    let maxLength = Math.max(s1.length, s2.length)
    let unique = {};
    for (let i = 0; i < maxLength; i++) {
      if (s1[i]) {
        if (unique[s1[i]]) {
          unique[s1[i]] += 1;
        } else {
          unique[s1[i]] = 1;
        }
      }
      if (s2[i]) {
        if (unique[s2[i]]) {
          unique[s2[i]] -= 1;
        } else {
          unique[s2[i]] = -1;
        }
      }
      
    }
    return Object.values(unique).every((el) => el === 0);
    
  };

  anagrams('restful', 'fluster'); // -> true
  anagrams('cats', 'tocs'); // -> false
  anagrams('monkeyswrite', 'newyorktimes'); // -> true
  anagrams('paper', 'reapa'); // -> false
  anagrams('elbow', 'below'); // -> true
  anagrams('tax', 'taxi'); // -> false
  anagrams('taxi', 'tax'); // -> false
  anagrams('night', 'thing'); // -> true