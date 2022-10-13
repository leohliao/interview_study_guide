/*
    
    Write a function, pairProduct, that takes in an array and a target product as arguments. 

    The function should return an array containing a pair of indices whose elements multiply to the given target. 
    The indices returned must be unique.

    Be sure to return the indices, not the elements themselves.

    There is guaranteed to be one such pair whose product is the target.

*/ 

const pairProduct = (numbers, targetProduct) => {
    let unique = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let div = (targetProduct / num);
      
      if (unique[num]) {
        return [unique[num], i];
      } else {
        unique[div] = i;
      }
      
    }
    
  };