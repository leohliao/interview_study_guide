/*

favorite
uncompress
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

test_00:
uncompress("2c3a1t"); // -> 'ccaaat'
test_01:
uncompress("4s2b"); // -> 'ssssbb'
test_02:
uncompress("2p1o5p"); // -> 'ppoppppp'
test_03:
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
test_04:
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
*/ 
const uncompress = (s) => {
    // instantiate result var
    let result = ""
    // split using regex
    let regex = /(\d*\w{1})/g;
    let arr = s.match(regex);
    console.log('arr: ', arr)
    // iterate each element (should be <number><string> pair)
    for (let item of arr) {
      // split the pair
      let elementRegex = /(\d*)(\w{1})/m;
      let splittedItem = item.match(elementRegex);
      // extract the number, extract the str
      let times = parseInt(splittedItem[1]);
      let letter = splittedItem[2];
      // create an array of the str base on the number
      let compute = new Array(times).fill(letter);
      // join the string, concat to the result
      result += compute.join("");
      
    }
    
    // return var result 
    return result
  };
  console.log(uncompress("2c3a1t")); // -> 'ccaaat'
  console.log(uncompress("4s2b"));  // -> 'ssssbb'
  console.log(uncompress("2p1o5p"));  // -> 'ppoppppp'
  console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
  console.log(uncompress("127y")); // -> 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'