let nums = [2, 7, 8, 9 , 10, 13, 17, 19, 21];

// Iterative
// Time complexity: O(log N)
// Space complexity: O(1)
function binarySearchIterative(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2 );
        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
}

// Recursive
// Time complexity: O(log N)
// Space complexity: O(log N)
function binarySearchRecursive(array, target) {
    
    function binarySearchHelper(arr, target, left, right) {
        if (left > right) {
            return false;
        }

        let mid = Math.floor((left + right) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            return binarySearchHelper(array, target, left, mid - 1);
        } else {
            return binarySearchHelper(array, target, mid + 1, right);
        }
    } 

    return binarySearchHelper(array, target, 0, array.length - 1);
}
