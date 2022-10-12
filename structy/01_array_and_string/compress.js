const compress = (s) => {
    let result = "";
    
    let count = 1;
    let currentLetter = s[0];
    
    for (let i = 1; i < s.length; i++) {
      let letter = s[i];
      if (letter === currentLetter) {
        count++;
      } else {
        let countStr = count > 1 ? count : "";
        result +=  countStr + currentLetter;
        currentLetter = letter;
        count = 1;
      }
    }
    
    let countStr = count > 1 ? count : "";
    result +=  countStr + currentLetter;
    
    return result;
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// -> '127y'