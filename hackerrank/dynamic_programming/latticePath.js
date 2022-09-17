// Base cases
// return 0 if row or column is less than 0
// return 1 if row and column is both 0
// int up = latticePaths(row -1, col)
// int left = latticePaths(row, col - 1)
// return up + left;
// Time complexity: O(2^M+N)
/*
                    2, 2
            /                   \
        2, 1                    1,2
    /           \           /           \   
2, 0            1, 1       1,1          0,2

*/ 

const latticePath = (row, col) => {
    if (row < 0 || col < 0) {
        return 0;
    }
    if (row === 0 && col === 0) {
        return 1;
    }
    const up = latticePath(row - 1, col);
    const left = latticePath(row, col - 1);
    return up + left;

}

console.log(latticePath(2,2)) //6
console.log(latticePath(2,3)) // 10

/*
 Memoization
 Time Complexity: Q(N*M)
 Auxiliary Space Complexity: Q(N)

                        0,0
                /               \
            0, 1                1, 0
        /       \            /          \
    0, 2        1,1         1,1         2,0
*/ 

function latticePathsMemoization(n, m) {
    //YOUR WORK HERE
    function findPaths(x, y) {
        if (x === n && y === m) {
            return 1;
        } 
        if (x > n || y > m) {
            return 0;
        }

        return findPaths(x, y + 1) + findPaths(x +1, y)
    }

    return findPaths(0, 0)
    
}


// Tabulation
// Time Complexity: Q(N*M)
// Auxiliary Space Complexity: Q(N)
function latticePathsTabulation(x, y) {
    //YOUR WORK HERE
    const table = new Array(y + 1).fill(1);
  
    for (let i = 0; i < x; i++ ) {
      for (let j = 1; j < table.length; j++) {
        table[j] = table[j] + table[j - 1];
      }
    }
    return table[y];
    
}