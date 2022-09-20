/*
 *  BitFlip
 *
 *  Given an array of binary values (0 and 1) and N number of flips that
 *  can convert a 0 to a 1, determine the maximum number of consecutive 1's
 *  that can be made.
 *
 *  Input: arr {Array}
 *  Input: n {Integer}
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 */

// Time Complexity:
// Auxiliary Space Complexity:
function bitFlip (arr, n) {
    //YOUR WORK HERE
    // [ 0, 1, 1, 1, 0, 1, 0, 1, 0, 0]
  
    let left = 0;
    let right = 0;
    let toggles = 0;
    let max = 0;
    // hunting phase
    // continue while find 1s or able to toggle 0 to 1
    // end when R goes off the array
    while (right < arr.length) {
      if (arr[right] === 0) {
        toggles++;
      }
      right++;
      
      // catch-up phase
    // when toggles > n
      while (toggles > n) {
        if (arr[left] === 0) {
          toggles--;
        }
        left++;
      }
  
      max = Math.max(max, right - left);
    }
    return max
  
  }