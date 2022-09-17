/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

--- I/O:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

Input: nums = [-1,-2,-3,-4,-5], target = -8
Output: [2,4]


--- Constraint:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
- Only one valid answer exists.
Q: Will me always have positive integers in the array?

*/ 

// Approach 
// Time: O(N)
// Space: O(N)
var twoSum = function(nums, target) {
    const target_diff = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (target_diff[num.toString()] >= 0) {
            return [target_diff[num.toString()], i];
        } else {
            target_diff[diff] = i;
        }
    }
};
