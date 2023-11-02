/*
    
    769. Max Chunks To Make Sorted
    URL: https://leetcode.com/problems/max-chunks-to-make-sorted/

    You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].

    We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

    Return the largest number of chunks we can make to sort the array.

    Example 1:
    Input: arr = [4,3,2,1,0]
    Output: 1
    Explanation:
    Splitting into two or more chunks will not return the required result.
    For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.

    Example 2:
    Input: arr = [1,0,2,3,4]
    Output: 4
    Explanation:
    We can split into two chunks, such as [1, 0], [2, 3, 4].
    However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
    

    Constraints:
    - n == arr.length
    - 1 <= n <= 10
    - 0 <= arr[i] < n
    - All the elements of arr are unique.
*/ 

/**
 * @param {number[]} arr
 * @return {number}
 */

/*
 -- Diagram
    
[1,0,2,3,4]

largest_num_chunks = 5
    
// chaining technique

        0 1 2 3 4 
       [1,0,2,3,4]
arr[i]  1 0 2 3 4
max     1 1 2 3 4
count   0 1 2 3 4
 
*/ 
var maxChunksToSorted = function(arr) {
    let max = arr[0]
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            count ++;
        }
    }
    return count;
};

/*
    TAG: Monotone Stack
    Next Greater Element II (a very basic one)
    Largest Rectangle in Histogram(almost the same as this problem)
    Maximal Rectangle(please do this problem after you solve the above one)
    Trapping Rain Water (challenge)
    Remove Duplicate Letters(challenge)
    Remove K Digits
    Create Maximum Number
    132 Pattern(challenge, instead of focusing on the elements in the stack, this problem focuses on the elements poped from the monotone stack)
    sliding window maximum(challenge, monotone queue)
    Max Chunks To Make Sorted II

*/ 