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