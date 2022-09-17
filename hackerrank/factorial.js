function factorial(n){
    // 1. instantiate scope variables
    var result = 1;

    // 3a. helper function
    function multiplyInt(count){
        
        // 4. base case
        if(count > n){ return; }
        
        // 5. recursive case
        result *= count;
        multiplyInt(count + 1);
    }

    // 3b. then invoke helper function 
    multiplyInt(1);

    // 2. return result
    return result;
}