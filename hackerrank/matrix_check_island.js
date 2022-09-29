/*

Given a rectangular matrix containing only the values “0” and “1”, where the values of “1” always appear in the form of a rectangular island and the islands are always separated row-wise and column-wise by at least one line of “0”s, count the number of islands in the given matrix. Note that the islands can diagonally adjacent.

Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all rectangular islands

Example

Input: [[1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
        [0, 0, 1, 0]]

Output: 3

Input: [[1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 0, 1]]

Output: 3

-- constraint:
  - No constraints

-- Diagram
         0  1  2  3
     0  [1, 1, 0, 1],
     1  [1, 1, 0, 1],
     2  [0, 0, 1, 0],
     3  [0, 0, 1, 0]. 
. 
     start: [0, 0] 
        => travese top to bottom, left to right
        - if element 1:
         => recursively checking for:
            - did we reach zero?
            - did we hit border?
            - travels right, travel down,
            - if 1, change to null to track visited node
            islandCount ++ 

-- Pseudocode:
  rowCurrent = 0
  colCurrent = 0
  rowMax = matrix.length
  colMax = matrix[0].length. 
  islandCount = 0;
  
  func checkIsland (rowIdx, colIdx)
    value = matrix[rowIdx][colIdx]
    if value == 0
      return;
    if rowIdx > rowMax or colIdx > colMax
      return;
    
    checkIsland(rowIdx + 1, colIdx);
    checkIsland(rowIdx, colIdx + 1);

    matrix[rowIdx][colIdx] = null    

  while rowCurrent < rowMax && colCurrent < colMax
    point = matrix[rowCurrent][colCurrent]
    
    if point == 1:
      checkIsland(rowCurrent, colCurrent)
      islandCount++
    if colCurrent === colMax
      rowCurrent ++
      colCurrent = 0
     
  return islandCount
*/

const countIslands = (matrix) => {
  let rowCurrent = 0;
  let colCurrent = 0;

  const rowMax = matrix.length - 1;
  const colMax = matrix[0].length - 1;

  let islandCount = 0
  const visited = {};

  const checkIsland = (rowIdx, colIdx) => {
    const key = rowIdx + "_" + colIdx;

    if (visited[key]) {
      return;
    }
    // border
    if (rowIdx < 0 || rowIdx > rowMax || colIdx < 0 || colIdx > colMax) {
      return;
    }
    let value = matrix[rowIdx][colIdx];
    // border by 0
    if (value === 0) {
      return;
    }

    checkIsland(rowIdx+1, colIdx); // right
    checkIsland(rowIdx, colIdx+1); // bottom
    checkIsland(rowIdx-1, colIdx); // up
    checkIsland(rowIdx, colIdx-1); // left
    visited[key] = true;
    matrix[rowIdx][colIdx] = null;
    // console.log('matrix: ', matrix)
  }

  while (rowCurrent < rowMax) {
    let point = matrix[rowCurrent][colCurrent]

    if (point === 1) {
      checkIsland(rowCurrent, colCurrent)
      islandCount++;
    }
    // console.log('rowCurrent: ', rowCurrent)
    // console.log('colCurrent: ', colCurrent)
    // console.log('colMax: ', colMax)
    if (colCurrent === colMax) {
      rowCurrent ++;
      colCurrent = 0;
    }

    colCurrent++;
  }

  return islandCount

}

/* check for left top point*/

function checkIslands(matrix) {
    let count = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        // if we hit 1
        if (matrix[i][j] == 1) {
          // and our top and left is either zero or outside the area
          if ((i - 1) < 0 || matrix[i - 1][j] === 0 &&
            (j - 1) < 0 || matrix[i][j - 1] === 0) {
            count++;
          }
        }
      }
    }
  
    /*
    if (matrix[i][j] == '1'):
               
                  if ((i == 0 or matrix[i - 1][j] == 'O') and
                      (j == 0 or matrix[i][j - 1] == 'O')):
                      count = count + 1
  
  
  
  
    */
  
  
  
  
    
    return count;
  }
  
  let example1 = [
    [1, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ]
  
  let example2 = [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 0, 1]
  ]

  let example3 = [
    [1, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ]

  let example4 = [
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ]
  console.log(countIslands(example1) === 3)
  console.log(countIslands(example2) === 3)
  console.log(countIslands(example3) === 2)
  console.log(countIslands(example4) === 1)