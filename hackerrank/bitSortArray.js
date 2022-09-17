/*
DIAGRAM
     i
[0,1,0,1,1,0,0,1]
           j            



*/

function bitSortArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] > arr[right]) {
            const temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left ++;
            right --;
        } else if (arr[left] === arr[right] && arr[left] === 0) {
            left ++;
        } else if (arr[left] === arr[right] && arr[left] === 1) {
            right ++;
        } else {
            left ++;
            right --;
        }

    }
    return arr;
}

console.log(bitSortArray([0,1,0,1,1,0,0,1]))
console.log(bitSortArray([0,1,0,1,1,1,1,0,0,1]))
console.log(bitSortArray([0,0,0,1,1,0,0,1]))