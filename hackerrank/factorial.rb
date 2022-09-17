def factorial(n)
    # 1. instantiate scope variables
    result = 1
    # 3a. helper method
    multiply_int = lambda do |count|
        # 4. base case
        return if count > n
        # 5. recursive case
        result *= count
        multiply_int.call(count + 1)
    end
    # 3b. invoke helper method with initial input parameters
    multiply_int.call(1)
    # 2. return result
    result
end