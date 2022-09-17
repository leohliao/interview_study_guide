/*
    Migratory Bird

    Given an array of bird sightings where every element represents a bird type id, 
    determine the id of the most frequently sighted type. 
    If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

    ---- I/O:
    The first line contains an integer, n, the size of arr.


*/ 

// Time: O(N)
// Space: O(N)
function migratoryBirds(arr) {
    // Write your code here
    const count = {};
    for (let id of arr) {
        if (count[id.toString()]) {
            count[id.toString()] ++
        } else {
            count[id] = 1
        }
    }
    
    const result = Object.keys(count).reduce((acc, curr) => {
        if (acc === undefined) {
            return curr;
        } else {
            const current_count = count[curr];
            const prev_count = count[acc];
            if (current_count > prev_count) {
                return curr;
            } else if (current_count === prev_count) {
                return acc > curr ? curr : acc;
            }
            return acc;
        }
        
    }, undefined);

    return result;
};

console.log(migratoryBirds([1,4,4,4,5,3]) === '4');
console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]) === '3');