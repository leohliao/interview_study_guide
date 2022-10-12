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