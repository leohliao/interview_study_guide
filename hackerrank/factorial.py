def factorial(n):
    # instantiate scope variables as collections (e.g., list)
    result = [1]
    # helper method
    def multiply_int(count):
        # base case
        if(count > n):
            return
        #recursive case
        result[0] = result[0] * count # <-- accessing an element in outer scope
        multiply_int(count + 1)
    # invoke helper method with initial input parameters
    multiply_int(1)
    #return result
    return result[0]