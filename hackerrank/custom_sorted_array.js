
/*
    AM Custom-Sorted Array
    
    In an array, elements at any two indices can be swapped in a single operation called a move.

    For example, if the array is arr [17, 4, 8],
    swap arr[0] == 17 and arr[2] = 8 to get
    arr= [8, 4, 17] in a single move. Determine the minim number of moves required to sort an arrray such that all of the even elements are at the beginning
    of the array and all of the odd elements are at the end of the array

    -- I/O:
    Input: arr = [6, 3, 4, 5]
    Ouput : 1 (swap 4 and 3)

    [13, 10, 21, 20] => 1

    [8, 5, 11, 4, 6] => 2

*/ 
function moves(arr) {
    // Write your code here
    // let resultCount = 0;
    let cache = {};
    // // console.log('arr: ', arr);
    
    const isEven = (n) => {
        // console.log('n: ', n);
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = n % 2 === 0;
        return cache[n];
    }   
    // const findMoves = (leftIdx, rightIdx) => {
    //     // console.log('leftIdx: ', leftIdx);
    //     // console.log('rightIdx: ', rightIdx);
        
    //     if (leftIdx >= rightIdx) {
    //         return;
    //     }
    //     const left = arr[leftIdx];
    //     const right = arr[rightIdx];
        
    //     if (!isEven(left) && isEven(right)) {
    //         const temp = arr[leftIdx];
    //         arr[leftIdx] = arr[rightIdx];
    //         arr[rightIdx] = arr[temp];
    //         resultCount++;
    //     } else if (isEven(left) && !isEven(right) ) {
    //         findMoves(leftIdx + 1, rightIdx - 1);
    //     } else if (isEven(left) && isEven(right)) {
    //         findMoves(leftIdx + 1, rightIdx);
    //     } else if (!isEven(left) && !isEven(right)) {
    //         findMoves(leftIdx, rightIdx - 1);
    //     }
    //     findMoves(leftIdx + 1, rightIdx - 1);
    // }
    
    // findMoves(0, arr.length - 1);
    // // console.log("resultCount: ", resultCount)
    // return resultCount;
    
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let swapCounts = 0; 
    
    while (leftIdx < rightIdx) {
        
        const left = arr[leftIdx];
        const right = arr[rightIdx];
        
        if (!isEven(left) && isEven(right)) {
            const temp = arr[leftIdx];
            arr[leftIdx] = arr[rightIdx];
            arr[rightIdx] = arr[temp];
            swapCounts++;
            leftIdx++;
            rightIdx--;
        } else if (isEven(left) && !isEven(right) ) {
            leftIdx++;
            rightIdx--;
        } else if (isEven(left) && isEven(right)) {
            leftIdx++;
        } else if (!isEven(left) && !isEven(right)) {
            rightIdx--;
        }

    }
    
    return swapCounts;
}
