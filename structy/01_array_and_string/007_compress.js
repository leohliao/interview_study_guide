/*
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

test_00:
compress('ccaaatsss'); // -> '2c3at3s'
test_01:
compress('ssssbbz'); // -> '4s2bz'
test_02:
compress('ppoppppp'); // -> '2po5p'
test_03:
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
test_04:
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// -> '127y'

*/ 

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