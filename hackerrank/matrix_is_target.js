/*
Write an efficient algorithm that searches for a value in an M x N matrix. This matrix has the following properties:

Integers in each row are sorted from left to right
The first integer of each row is greater than the last integer of the previous row.

Input: Matrix of Integers, Target Integer
Output: Boolean
Example

Example 1:

Input:

matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 3
Output: True

Example 2:

Input:

matrix = [
  [1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 13
Output: False


Input:
matrix = []
target = 13
Output: False

-- constraints:
  - target will be positive
  - matrix integers are positive
  - time complexity

-- diagram
    target = 13
   [1,   3,  5,  7],
   [10, 11, 16, 20],
   [23, 30, 34, 50]

  increment row until we find comparison
  first comparison: matrix[row++][0]
  
  second comparison: matrix[constant_row][col++]
  binary_search to find the target

-- Pseudocode:

   targetRow = 0

   while targetRow < matrix.length
     head = matrix[targetRow][0]
     if head === target
        return true
     if head > target
       return;
     targetRow++. 

  targetRow = targetRow > 0 ? targetRow - 1 : 0

  row = matrix[targetRow] 
  
  func binarySearch(row):
    mid = round row.length/2
    if target === row[mid]
      return true
      
    if (target> row[mid])  
      binarySearch(row.slice(mid + 1))
    if (target < row[mid])
      binarySearch(row.slice(0, mid)
  

  binarySearch(row)

  return false
*/

// O(N + logM)
// O(logN + logM)

const isTarget = (matrix, target) => {
    let targetRow = 0;
    let hasTarget = false;
  
    while (targetRow < matrix.length) {
      let head = matrix[targetRow][0];
  
      if (head === target) {
        return true;
      }
      if (head > target) {
        break;
      }
      targetRow++;
    }
  
    targetRow = targetRow > 0 ? targetRow - 1 : 0;
    // console.log('targetRow: ', targetRow);  
  
    const binarySearch = (arr) => {
      let mid = Math.floor(arr.length / 2);
  
      if (arr[mid] === target) {
        hasTarget = true;
      }
  
      if (arr[mid] > target) {
        binarySearch(arr.slice(0, mid))
      } else if (arr[mid] < target) {
        binarySearch(arr.slice(mid + 1))
      }
  
    }
  
    const row = matrix[targetRow];
    // console.log('row: ', row);  
    binarySearch(row);
  
    return hasTarget;
  }
  
  let example1 = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  
  let example2 = [
    [1, 2, 3, 5, 7],
    [10, 11, 23, 16, 20],
    [23, 30, 33, 34, 50]
  ]
  console.log(isTarget(example1, 13)); //false
  console.log(isTarget(example2, 3));  // true
  console.log(isTarget(example2, 50)); // true
  console.log(isTarget(example2, 1)); // true