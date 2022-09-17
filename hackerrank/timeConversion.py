# Given a time in -hour AM/PM format, convert it to military (24-hour) time.

# Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
# - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

# Example


# Return '12:01:00'.


# Return '00:01:00'.

# Function Description

# Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

# timeConversion has the following parameter(s):

# string s: a time in  hour format
# Returns

# string: the time in  hour format
# Input Format

# A single string  that represents a time in -hour clock format (i.e.:  or ).

# Constraints

# All input times are valid
# Sample Input

# 07:05:45PM
# Sample Output

# 19:05:45


# Additional Test Case:
# 12:45:54PM
# 00:00:00PM

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
    timeList = s.split(":")
    hours = timeList[0]
    minutes = timeList[1]
    seconds = timeList[2][0:2]
    ampm = timeList[2][2:]
    if ampm == "AM":
        new_hours = str(int(hours) % 12)
        if (len(new_hours) < 2):
            new_hours = "0" + new_hours
        return(f"{':'.join([new_hours, minutes, seconds])}")
    else:
        new_hours = str((12 + int(hours) % 12) % 24)
            
        if (len(new_hours) < 2):
            new_hours = "0" + new_hours
        
        return(f"{':'.join([new_hours, minutes, seconds])}")

    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
