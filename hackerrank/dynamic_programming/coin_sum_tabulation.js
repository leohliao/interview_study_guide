/*
    Classic Dynamic Programming Question
    - Always start with creating a recursive tree
    
    COIN SUM - Given an array of coins, find on possible combination to meet the target

    I/O:
    input: @coins [1, 2, 4]
    input: @total 5
    output: integer

    Diagram:

1. Identify factors                     => (total, coins)
2. Create table w/ incrementally        => total on x
    - increasing factors                => coin on y
        - what is smallest version?     => 0, []
        - what's eventual version?      => 5, [1,2,4]
3. Determine formula
4. Create foundation                    => create first row
5. Fill out rest of table

Total           0   1   2   3   4   5  
Coins   
          |   -----------------------------------------
[]        |     1   0   0   0   0   0 
[1]       |     1   1   1   1   1   1 
[1,2]     |     1   1   2   2   3   3 
[1, 2, 4] |     1   1   2   2   4   4   

                        []
                        ^
                        |
                [] <==  []
*/  
// Tabluation
// Time Complexity: O(M*N)
// Space Complexity: O(M*N) if this matrix
// Space Complexity: O(M*N)  for single array

function coinSum(coinsInput, totalInput) {

    const table = new Array(totalInput + 1).fill(0);
    table[0] = 1;

    for (let coin of coinsInput ) {
        for (let i = coin; i < table.length; i++) {
            table[i] = table[i] + table[i - coin];
        }
        console.log("table: ", table)
    }
    return table[totalInput];
}

console.log(coinSum([1,2,4], 5))