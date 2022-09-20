/*
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.

Input: Array of integers, target value
Output: Boolean

Input: [6,12,1,7,5,2,3], 14     =>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false
Input: [], 50		                =>	Output: false

-- Constraint:
  - Target and number in the arrray will all be positive
  - Open-ended with Time and Space complexity

-- Diagram:
idx:  0   1    2   3   4   5   6
  [   6,  12,  1,  7,  5,  2,  3  ]

                   i
                           j

  i = 3
  j = 5
  currentSum = 14; // used to compare against the target

--- Pseucode
  i, j = 0, 0
  currentSum = 0
  result = false

  while j < arr.length - 1
    currentSum = currentSum + arr[j]
    
    if currentSum === target 
      result = true
      return;
      
    if currentSum < target
      j++

    if currentSum > target
      currentSum - arr[i]
      i++
          

  return result;
-
---------------------------

Given a string, return the shortest substring that has at least 3 unique characters, or false if there is no such string

Input: String
Output: String or Boolean

Input: aabaca => Output: bac
Input: abaacc => Output: baac
Input: abc => Output: abc
Input: aabb => Output: False

*/

function sumSubArray(arr, target) {
    let [i, j] = [0, 0];
    let currentSum = 0;
    let result = false;  
    
    while (j < arr.length) {
          
      if (currentSum === target) {
        result = true;
      }
  
      currentSum = currentSum + arr[j];
      if (currentSum > target) {
        currentSum = currentSum - arr[i];
        i++;
      }
  
      j++;
    }
    
    return result;
  
  }
  
  console.log(sumSubArray([6, 12, 1, 7, 5, 2, 3], 14))
  console.log(sumSubArray([8, 3, 7, 9, 10, 1, 13], 50))
  