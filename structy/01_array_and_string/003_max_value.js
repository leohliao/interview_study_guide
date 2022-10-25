/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

test_00:
maxValue([4, 7, 2, 8, 10, 9]); // -> 10
test_01:
maxValue([10, 5, 40, 40.3]); // -> 40.3
test_02:
maxValue([-5, -2, -1, -11]); // -> -1
test_03:
maxValue([42]); // -> 42
test_04:
maxValue([1000, 8]); // -> 1000
test_05:
maxValue([1000, 8, 9000]); // -> 9000
test_06:
maxValue([2, 5, 1, 1, 4]); // -> 5
*/ 

const maxValue = (nums) => {
    let max = nums[0];
    for (let num of nums) {
      max = Math.max(num, max);
    }
    return max;
  };
  