/*
Given an array of sorted arrays of numbers, return the result of merging all those sorted arrays into a single sorted array


Input:
[
[1, 10, 11, 15],
[2, 4,  9,  14],
[5, 6,  8,  16],
[3, 7,  12, 13]
]

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

Input: []
Output: []

-- Constraints:
  - No constraints
  - all positive integers

-- Diagram

  [1, 10, 11, 15, 2, 4,  9,  14, 5, 6,  8,  16, 3, 7,  12, 13]
   i   

-- Pseudo

  mergedArr = matrix.reduce((), [])

// Bubble Sort
  isSorted = false

  while isSorted === false
    for i = 0; i < mergedArr.length; i++
      j = i + 1
      isSorted = true
      if mergedArr[i] > mergedArr[j]
        mergedArr[i], mergeArr[j] = mergedArr[j], mergedArr[i]
        isSorted = false

  return mergedArr

  // Heapsort
  helper swap
    [parent, child] = [child, parent]
  
  helper getChild(n)
    child1 = 2n + 1
    child2 = 2n + 2

    if child1 >= mergedArr.length
      return child1
    elif child2 >= mergedArr.length
      return child1
    elif child1 <= child2
      return child1
    else
      return child2
  
  helper bubbleDown(parent)
    child = getChild(parent)

    while child < mergedArr.length && mergedArr[child] > mergeArr[parent]
      swap(parent, child)
      parent = child
      child = getChild(parent)

  for (i = 0; i < mergedArr.length; i++)
  
    bubbleDown(i)
  
*/

const sort_k_arrays = (matrix) => {
    O(NM)
    let mergedArr = matrix.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, [])
  
    // BubbleSort
    // let isSorted = false;
    // while (!isSorted) {
    //   isSorted = true;
    //   for (let i = 0; i < mergedArr.length - 1; i++) {
    //     let j = i + 1;
    //     if (mergedArr[i] > mergedArr[j]) {
    //       [mergedArr[i], mergedArr[j]] = [mergedArr[j], mergedArr[i]];
    //       isSorted = false;
    //     }
    //   }
    // }
  
    // HeapSort
    // O(NM log M)
    const swap = (i1, i2) => {
      [mergedArr[i1], mergedArr[i2]] = [mergedArr[i2], mergedArr[i1]]
    }
  
  
    const getChild = (parentIdx) => {
      let child1 = 2 * parentIdx + 1;
      let child2 = 2 * parentIdx + 2;
  
      if (child1 >= mergedArr.length) {
        return child1;
      } else if (child2 >= mergedArr.length) {
        return child1;
      } else if (mergedArr[child1] < mergedArr[child2]) {
        return child1;
      } else {
        return child2;
      }
    }
  
  
    const bubbleDown = (parent) => {
      let child = getChild(parent);
      console.log("parent - child: ", parent, " ", child);
  
      while (child < mergedArr.length && mergedArr[child] < mergedArr[parent]) {
        console.log("mergedArr[child]", mergedArr[child])
        console.log("mergedArr[parent]", mergedArr[parent])
        console.log("before swapped mergedArr: ", mergedArr);
        swap(parent, child);
        console.log("after swapped mergedArr: ", mergedArr);
        parent = child;
        child = getChild(parent);
      }
  
    }
  
    for (let i = 0; i < mergedArr.length; i++) {
      // swap(0, mergedArr.length -1);
      bubbleDown(i);
    }
    return mergedArr;
  }
  
  
  console.log(sort_k_arrays([
    [1, 10, 11, 15],
    [2, 4, 9, 14],
    [5, 6, 8, 16],
    [3, 7, 12, 13]
  ]))
  
  // 0 [1,2] 1 - [2, 4]
  // 1 [3,4] 2 - [4, 5]
  // 2 [5,6] 4 - [3, 7] X
  // 3 [7,8] 5 - [13, 15]
  // 4 [9,10] 6 - [10, 8]
  // 5 [11,12] 3 - [16, 11]
  // 6 [13,14] 7 - [9, 12]
  // 7 [15,16] 13 - [14, null]