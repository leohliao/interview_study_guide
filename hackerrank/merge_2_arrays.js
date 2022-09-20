/*
    Given two sorted arrays, merge them to form a single, sorted array with all items in non-decreasing order.

    Example:
    a = [1,2,3] (sorted)
    b = [2, 5, 5] (sorted)

    Input: 
    a = [1, 5, 7, 7]
    b = [0, 1, 2, 3]
    => [0, 1, 1, 2, 3, 5, 7, 7]

    Input:
    a = [2, 4, 5, 9, 9]
    b = [0, 1, 2, 3, 4]
    => [0, 1, 2, 2, 3, 4, 4, 5, 9, 9]
*/ 

function mergeArrays(a, b) {
    // Write your code here
    const merged = [...a, ...b].sort((a, b) => parseInt(a) - parseInt(b));

    return merged;
}

