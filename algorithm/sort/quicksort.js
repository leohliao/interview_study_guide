/*
    Quicksort

    Time complexity is still O(N^2) worse case, 
    average time complexity is O(Nlog(N)), 
    and auxiliary space complexity is average case O(log(N)) because of the recursive stack.

*/ 
 
const quickSort = (arr) => {
    // Create a pivot point
    // Separate the number into uppder and lower section

    const divide = (start,end) => {
        // base
        if (start >= end) { return; }
        
        let mid = start;
        for (let i = start; i < end; i++) {
            if(arr[i] < arr[end]) {
                [arr[i], arr[mid]] = [arr[mid], arr[i]];
                mid++;
            }
        }
        // Pivot is now at the end after looping
        [arr[mid], arr[end]] = [arr[end], arr[mid]];

        divide(start, mid - 1);
        divide(mid + 1, end);
    }

    divide(0, arr.length - 1);
    return arr;
}

console.log(quickSort([7, 3, 8, 2, 10, 0]));