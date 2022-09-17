function knapsack(weights, values, capacity) {
    var finalMax = new Int32Array(capacity + 1); // create a new array of 0’s
    
    for(var i = 0; i < weights.length; i++) {
      var weight = weights[i];
      var value = values[i];
      var tempMax = finalMax.slice(); // make a copy of the finalMax array
      for(var cap = 0; cap <= capacity; cap++) {
        if(cap - weight >= 0) {
          tempMax[cap] = Math.max(tempMax[cap], finalMax[cap - weight] + value);
        }
      }
      finalMax = tempMax;
    }
    return finalMax[capacity];
}

console.log(knapsack([10, 20, 30], [60, 100, 120], 50)) // 220