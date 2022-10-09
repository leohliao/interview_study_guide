/*
    Given an unsorted array of integers, return the array sorted using heapsort.
    The heapsort algorithm must be performed in place without using extra space (outside of the call stack)

    I/O:
        Input: Array of integers
        Output: Array of integers
    
    Example: 
        heapsort([4, 15, 16, 50, 8, 23, 42, 108]) --> [4, 8, 15, 16, 23, 42, 50, 108]

    Notes:
        Heapsort can be performed by transforming your array into a max heap and then using the properties of a max heap to transform your max heap into a sorted array.
        How can we do this in-place?
        Consider implementing and using any of the following functions
            - bubbleDown (swapping parents with their children in order to maintain the heap conditions)
            - getChild (calculate and return a relevant child index based on a given parent index in an array-based heap)
            - bubbleUp (swapping children with their parents in order to main the heap conditions)
        
        Remember the parent/child relationships in your calculations:
            - child1 = 2*parent + 1
            - child2 = 2*parent + 2
            - parent = floor((child-1)/2)

        Also remember that whena dding or removing from an array-based heap, you can only do so at the end of the array (although as an unrelated noted to this problem, if you ever wish to replace the peak element of your heap with a new element, you may do so, but don't forget to bubble down your replacement element).

*/ 

/*
 * Complete the 'heapsort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


/*
 * Approach 1
 */ 
const getChildIndex = (arr, parentIndex, boundary) => {
    let childIndex1 = 2 * parentIndex + 1;
    let childIndex2 = 2 * parentIndex + 2;
    
    if (childIndex1 >= boundary) {
        return childIndex1;
    } else if (childIndex2 >= boundary) {
        return childIndex1;
    } else if (arr[childIndex1] > arr[childIndex2]) {
        return childIndex1;
    } else {
        return childIndex2;
    }
    
}

const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

const bubbleDown = (arr, parentIndex, boundary) => {
    let childIndex = getChildIndex(arr, parentIndex, boundary);
    
    while (childIndex < boundary && arr[parentIndex] < arr[childIndex]) {
        swap(arr, parentIndex, childIndex);
        parentIndex = childIndex;
        childIndex = getChildIndex(arr, parentIndex, boundary);
    }
}

const heapsort = (arr) => {
    // 1. Heapify - into max
    // Time: O(N)
    // Reason: O(N - log2(N+1))
    for (let i = arr.length - 1; i > -1; i--) {
        bubbleDown(arr, i, arr.length);
    }
    
    console.log('arr: ', arr);
    // 2. Sortify
    // Time: O(N log(N))
    for (let wall = arr.length - 1; wall > -1; wall--) {
        swap(arr, 0, wall);
        bubbleDown(arr, 0, wall);
        
    }
    return arr;
}

/*
 * Approach 2
 */ 

// Utilize array as a heap as well
// add items to heap
// then remove all values;
function heapsort_2(arr) {
    let heapLength = 1;
    
    function getParent(child) {
        return Math.floor((child - 1)/2);
    }
    function getChild(parent) {
        let left = parent * 2 + 1;
        if (left >= heapLength - 1 || arr[left] >= arr[left + 1]) {
            return left;
        }
        return left + 1;
    }

    while (heapLength < arr.length) {
        heapLength++;

        // the item idx that we just inserted
        let child = heapLength - 1;
        let parent = getParent(child);

        // Bubble up
        while ( 
            child > 0 // meaning we haven't reach the top of heap
            && arr[parent] < arr[child] // swap loop
        ) {
            [arr[parent], arr[child]] = [arr[child], arr[parent]];
            child = parent;
            parent = getParent(child);
        }
    }

    while (heapLength > 1) {
        // Swap the first and last element
        [arr[0], arr[heapLength - 1]] = [arr[heapLength - 1], arr[0]]
        heapLength --;
        // Bubble down
        let parent = 0;
        let child = getChild(parent);
        
        while ( child < heapLength && arr[parent] < arr[child]) {
            [arr[parent], arr[child]] = [arr[child], arr[parent]];
            parent = child;
            child = getChild(parent);
        }
    }

    return arr;
}

console.log(heapsort([9, 1, 6, 10, 0, 18, 9, 8, 5, 6, 3, 22, -10, -8, 2]));
// console.log(heapsort_2([9, 1, 6, 10, 0, 18, 9, 8, 5, 6, 3, 22, -10, -8, 2]));