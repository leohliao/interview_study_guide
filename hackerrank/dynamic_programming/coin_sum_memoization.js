/*
    Classic Dynamic Programming Question
    - Always start with creating a recursive tree
    
    COIN SUM - Given an array of coins, find on possible combination to meet the target

    I/O:
    input: @coins [1, 2, 4]
    input: @total 5
    output: integer

    Diagram:
    I. recursive tree
                        5
                /       |         \
            4           3           1
        /   |   \    /  |  \     /  |  \     
       3    2    0              0  -1  -3

    2. coins
                        5 [1, 2, 4]
            / substract last coin          \ pop left coin
          1 [1, 2, 4]                         5 [1, 2]
        /           \ 1                        /         \
-3 [1, 2, 4]        1[1,2]                3[1,2]           5[1] 
                /       \ 1              /                  /
            1[1,2]      1[1]           1[1,2]            4[1] 
                        / 1  \  0        /     \           /
                    0[1]    1,[]     -1[1,2]  1[1]    3[1]
                   /    \ 1                           /
                -1,[1]  0,[]                       2[1]
                                                 /
                                              1[1]
                                             /
                                          0[1]
*/  

function coinSum(coinInput, totalInput) {

    const findWays = (total, coins) => {
        // base cases
        if (total < 0) {
            return 0;
        }
        if (coins.length === 0) {
            if (total > 0) {
                return 0;
            }
            return 1;
        }

        // recursive
        let left = findWays(total - coins[coins.length - 1], coins);
        let popped = coins.pop();
        let right = findWays(total, coins); // this coins is now using 
        coins.push(popped);

        return left + right;
    }

    return findWays(totalInput, coinInput);

}

// console.log(coinSum([1,2,4], 4)) // 4
console.log(coinSum([2,5,3,6], 10)) // 5
