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