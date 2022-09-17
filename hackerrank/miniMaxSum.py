# Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# Example

# The minimum sum is  and the maximum sum is . The function prints

# 16 24
# Function Description

# Complete the miniMaxSum function in the editor below.

# miniMaxSum has the following parameter(s):

# arr: an array of  integers
# Print

# Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

# Input Format

# A single line of five space-separated integers.

# Constraints


# Output Format

# Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

# Sample Input

# 1 2 3 4 5
# Sample Output

# 10 14
# Explanation

# The numbers are , , , , and . Calculate the following sums using four of the five integers:

# Sum everything except , the sum is .
# Sum everything except , the sum is .
# Sum everything except , the sum is .
# Sum everything except , the sum is .
# Sum everything except , the sum is .
# Hints: Beware of integer overflow! Use 64-bit Integer.

# Need help to get started? Try the Solve Me First problem

#!/bin/python3

import math
import os
import random
import re
import sys
import functools
#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    sorted_arr = sorted(arr)
    max_sum = functools.reduce(lambda a, b: a+b, sorted_arr[1:len(sorted_arr)])
    min_sum = functools.reduce(lambda a, b: a+b, sorted_arr[0:len(sorted_arr)-1])
    print(min_sum, max_sum)

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
