const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let x = 2; x <= Math.sqrt(n); x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  };