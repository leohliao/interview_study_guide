/*
 *  Homework - Dynamic Programming
 *
 *
 *  Problem 1:  Max Consecutive Sum
 *
 *  Prompt:    Given an array of integers find the sum of consecutive
 *             values in the array that produces the maximum value.
 *
 *  Input:     Unsorted array of positive and negative integers
 *  Output:    Integer (max consecutive sum)
 *
 *  Example:   input = [6, -1, 3, 5, -10]
 *             output = 13 (6 + -1 + 3 + 5 = 13)
 *
 *
 */

// Time Complexity: O(N)
// Auxiliary Space Complexity: O(N)
function maxConsecutiveSum(arr) {
    //YOUR WORK HERE
    //            [6, -1, 3, 5, -10]
    // local       6, 5, 8, 13, 3
    // ultimate    6, 6, 8, 13, 13
  
    let local = arr[0];
    let ultimate = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      local = Math.max(local + arr[i], arr[i]);
      ultimate = Math.max(local, ultimate);
    }
    return ultimate ? ultimate : 0;
}

console.log(maxConsecutiveSum([6, -1, 3, 5, -10]) === 13);
