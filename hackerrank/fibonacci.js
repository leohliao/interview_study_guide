/*
    BOTTOM UP APPRORACH
*/ 
function nthFibonacci(n) {
    var fib = [0, 1];
    function searchFib(i) {
        if (i > n) { return ;}
        fib[i] = fib[i -2] + fib[i - 1];
        searchFib(i + 1);
    }
    searchFib(2);
    return fib(n);
}

/*
    TOP BOTTOM APPRORACH
    - start at input case
*/ 
function nthFibonacci(n) {
    var result;
    function searchFib(index) {
        if (index < 2) {
            return index;
        } else {
            return searchFib(index-2) + searchFib(index-1);
        }
    }
    result = searchFib(n);
    return result;
}

/*
    Alternative approaches:
    - iterative solutons (looping)
    - create your own stack (while loops)
    - dynamic programming
        - tabulation
        - memoization
*/ 