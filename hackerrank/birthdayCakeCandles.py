# You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

# Example


# The maximum height candles are  units high. There are  of them, so return .

# Function Description

# Complete the function birthdayCakeCandles in the editor below.

# birthdayCakeCandles has the following parameter(s):

# int candles[n]: the candle heights
# Returns

# int: the number of candles that are tallest
# Input Format

# The first line contains a single integer, , the size of .
# The second line contains  space-separated integers, where each integer  describes the height of .

# Constraints

# Sample Input 0

# 4
# 3 2 1 3
# Sample Output 0

# 2
# Explanation 0

# Candle heights are . The tallest candles are  units, and there are  of them.

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#

def birthdayCakeCandles(candles):
    # Write your code here
    candlesDict = {}
    highest_num = candles[0]
    
    for c in candles:
        candle_str = str(c)
        if candlesDict.get(candle_str):
            candlesDict[candle_str].append(candle_str)
        else:
            candlesDict[candle_str] = [candle_str]
        if c > highest_num:
            highest_num = c
    
    return(len(candlesDict[str(highest_num)]))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    candles_count = int(input().strip())

    candles = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(candles)

    fptr.write(str(result) + '\n')

    fptr.close()
