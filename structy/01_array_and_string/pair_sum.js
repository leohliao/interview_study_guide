const pairSum = (numbers, targetSum) => {
    let cache = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      let diff = (targetSum - number).toString();
  
      if (cache[number] !== undefined) {
        return [cache[number], i];
      } else {
        cache[diff] = i;
      }
    }
    return [];
  };