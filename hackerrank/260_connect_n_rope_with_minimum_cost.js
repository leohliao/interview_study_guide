/*
  Given n ropes of different lengths represented by an array of integers, connect them all into a single rope in a way that minimizes the cost of connecting them.

The cost of connecting two ropes is equal to sum of their lengths. We want to minimize the cost of connecting all the ropes.

Input: ropes, [Integer]
Output: Integer

In: [4, 3, 2, 6]
Out: 29


Explanation:

First we connect 3 + 2 = 5, giving the following ropes: [4,5,6]
Then we connect 5 + 4 = 9, giving the following ropes: [9,6]
Then we connect 9 + 6 = 15, giving the final combination of all ropes: [15]

So in total the cost for the most efficient approach is: 5 + 9 + 15 = 29

A less efficient way would be:

First we connect 4 + 6 = 10, giving the following ropes: [10,3,2]
Then we connect 10 + 3 = 13, giving the following ropes: [13,2]
Then we connect 13 + 2 = 15, giving the final combination of all ropes: [15]

So in total the cost for the less efficient approach is: 10 + 13 + 15 = 38

Although in both cases we need to make the same number of connections, the costs are different


Input: []
Output: 0

Constraints:
  - all positive
  - time complexity/space complexity: As efficient as possible

-- Diagram
  [4, 3, 2, 6]
  output: 29

  reference = 0
  [4, 3, 2, 6]
      i  j
  3 + 2 = 5
  
  reference = 5
  [4, 5, 6]
   i j
  i + j = 9

  reference = 14
  [9, 6]
   i  j
  i + j = 15

  reference = 29
  []. 

  ---------------
  reference = 0
  [4, 3, 2, 6]
   i  j
   4 + 3 = 7

  reference=7
  [7, 2, 6]
   i, j
   7 + 2 = 9

  reference=16
  [9, 6]
   i  j
   9 + 6 = 15

  reference = 31
  []

-- Pseudo
  let minimalCount;

  func countConnections(idx1, idx2, total, arr):
    currentTotal = arr[idx1] + arr[idx2]
    
    if arr.length === 2
      return currentTotal + total
      
    arr = [...arr.slice(0, idx1 - 1), total, ...arr.slice(idx2 + 1)]
    countConnections(0, 1, currentTotal, arr)

  for i =0; i < ropes.length - 1; i++
    for j = 1; j < ropes.length; j++ 
      countConnections(i, j, 0, ropes):
      if !minimalCount
        reference = minimalCount
      else
        minimalCount = Math.min(minimalCount, reference)

      reference = 0
    
  return minimalCount = 0;
*/

const findMinimumConnections = (ropes) => {
    let minimalCount;
  
    const countConnections = (idx1, idx2, total, arr) => {
      let currentTotal = arr[idx1] + arr[idx2];
      // console.log("total: ", total)
      if (arr.length === 2) {
  
        return currentTotal + total;
      }
      let newArr = arr.reduce((acc, curr, i) => {
        if (i === idx2) {
          // 
        } else if (i === idx1) {
          acc.push(currentTotal);
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
  
      return countConnections(0, 1, currentTotal + total, newArr);
    }
  
    for (let i = 0; i < ropes.length - 1; i++) {
      for (let j = 1; j < ropes.length; j++) {
        if (i < j) {
          // console.log("i: ", i)
          // console.log("j: ", j)
          let reference = countConnections(i, j, 0, ropes);
          // console.log("reference: ", reference)
          if (!minimalCount) {
            minimalCount = reference;
          } else {
            minimalCount = Math.min(minimalCount, reference)
          }
        }
  
      }
  
    }
  
    return minimalCount;
  }
  
  console.log(findMinimumConnections([4, 3, 2, 6]))
  console.log(findMinimumConnections([1, 4, 3]))
  
  /*
  
  arr = [4, 3, 2, 6]
  
  // sort
  arr = [2, 3, 4, 6]
  
  // add first 2 element
  // delete the original elements
  // [total, ...arr.slice(1)]
  arr = [5, 4, 6]
  reference = 5
  
  // add first 2 element
  // delete the original elements
  // [total, ...arr.slice(1)]
  arr = [9, 6]
  reference = 14
  
  // add first 2 element
  // delete the original elements
  // [total, ...arr.slice(1)]
  arr = []
  reference = 29
  
  arr = [1, 4, 3]
  // sort
  arr = [1, 3, 4]
  
  // add first 2 element
  // delete the original elements
  // [total, ...arr.slice(1)]
  arr = [4, 4]
  reference = 4 + 
  
  // add first 2 element
  // delete the original elements
  // [total, ...arr.slice(1)]
  arr = []
  reference = 12
  
  */
  
  const findMinimumConnectionOptimized = (arr) => {
    const sortedArr = arr.sort();
  
    console.log('sortedArr: ', sortedArr)
  }
  
  console.log(findMinimumConnectionOptimized([4, 3, 2, 6]))