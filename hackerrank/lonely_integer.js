/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

- It is guaranteed that  is an odd number and that there is one unique element.

*/ 

function lonelyinteger(a) {
    // Write your code here
    if (a.length === 1) {
        return a[0];
    }
    if (a.length < 1) {
        return 0;
    }
    const unique = {};
    for (let n of a) {
        if (unique[n]) {
            unique[n] ++;
        } else {
            unique[n] = 1;
        }
    }
    console.log("a: ", a);
    console.log("unique: ", unique);
    
    const mrlonely = Object.keys(unique).reduce((a, c) => {

        const current_count = unique[c];
        if (current_count === 1) {
            return c;
        } else {
            return a;
        }
 
    }, null)
    
    console.log("mrlonely: ", mrlonely);
    return mrlonely;
}

console.log(lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31])) // 45