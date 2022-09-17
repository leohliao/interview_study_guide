# Given a number n, count minimum steps to minimize it to 1 according to the following criteria: 

# If n is divisible by 2 then we may reduce n to n/2.
# If n is divisible by 3 then you may reduce n to n/3.
# Decrement n by 1.
# Examples: 

# Input : n = 10
# Output : 3

# Input : 6
# Output : 2

# Python program to minimize
# n to 1 by given
# rule in minimum steps
 

# Python program to minimize
# n to 1 by given
# rule in minimum steps
 
# # function to calculate min steps
def minimumStepToOneRecursion(num):
    num_of_steps = 0
    current_num = num
    while current_num != 1:
        if current_num % 3 == 0:
            current_num = current_num / 3
            num_of_steps = num_of_steps + 1
        elif current_num % 2 == 0:
            current_num = current_num / 2
            num_of_steps = num_of_steps + 1
        else:
            current_num = current_num - 1
            num_of_steps = num_of_steps + 1
    return num_of_steps


 
# driver program
n = 10
print(minimumStepToOneRecursion(n))
 
# This code is contributed by Soumen Ghosh. 

