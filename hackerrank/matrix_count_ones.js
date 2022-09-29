/*
Given a matrix with N rows and M columns where elements in the matrix can be either 1 or 0 and each row and column are sorted in ascending order, find the number of 1s.

Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all 1’s in the matrix
Example

Input:         
   [[0, 0, 0, 1],
		[0, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 1, 1, 1]]

Output: 9

Input: 
  []
Output: 
  0

Input: 
  [[]]
Output: 
  0

-- Constraints:
  - No constraints

-- Diagram     
     0  1  2  3   col
 0  [0, 0, 0, 1],
 1	[0, 0, 1, 1],
 2	[0, 1, 1, 1],
 3  [0, 1, 1, 1]
 row     
 
iterative:
     row, col
     start   |  end
     [3, 3] => [3, 0] = 3
     [2, 3] => [2, 0] = 3
     [1, 3] => [1, 1] = 2
     [0, 3] => [0, 2] = 1 
  output: 9

-- Pseudocode
  count = 0      
  rowMax = matrix.length
  colMax = matrix[0].length    
  
  currentRow = rowMax
  currentCol = colMax

  while currentRow > -1 
    point = matrix[currentRow][currentCol]
    
    while point != 0
      point = matrix[currentRow][currentCol - 1]

    count += colMax - currentCol
    currentCol = colMax
    
    currentRow--

  return count
  
*/ 
const CountOnes = (matrix) => {
    let count = 0;
    let rowMax = matrix.length - 1;
    let colMax = matrix[0].length - 1;
  
    let currentRow = rowMax;
    let currentCol = colMax;
    // console.log('matrix: ', matrix);
    while (currentRow > -1) {
      // console.log('currentRow: ', currentRow);
      let point = matrix[currentRow][currentCol];
      // console.log('point: ', point);
      while (point !== 0 && currentCol > -1) {
        currentCol--;
        point = matrix[currentRow][currentCol];
        // console.log('point: ', point);
      }
      // console.log('currentCol: ', currentCol);
      count += colMax - currentCol;
      // console.log('count: ', count);
      currentCol = colMax;
      
      currentRow--;
      
    }
    
    return count;
  }
  // Tests
  console.log(CountOnes([[0,0,1],[0,1,1],[1,1,1]]));
  // 6
  console.log(CountOnes([[1,1,1],[1,1,1],[1,1,1]]));
  // 9
  console.log(CountOnes([[0,0,1],[0,0,1],[0,0,1]]));
  // 3
  console.log(CountOnes([[0,0,0],[0,0,0],[0,0,0]]));
  // 0
  
  // console.log(findOne([[0, 0, 0, 1],[0, 0, 1, 1],[0, 1, 1, 1],[0, 1, 1, 1]]) === 9);