# Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

# Example

# Scores are in the same order as the games played. She tabulates her results as follows:

#                                      Count
#     Game  Score  Minimum  Maximum   Min Max
#      0      12     12       12       0   0
#      1      24     12       24       0   1
#      2      10     10       24       1   1
#      3      24     10       24       1   1
# Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

# Function Description

# Complete the breakingRecords function in the editor below.

# breakingRecords has the following parameter(s):

# int scores[n]: points scored per game
# Returns

# int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
# Input Format

# The first line contains an integer , the number of games.
# The second line contains  space-separated integers describing the respective values of .

# Constraints

# Sample Input 0

# 9
# 10 5 20 20 4 5 2 25 1
# Sample Output 0

# 2 4
# Explanation 0

# The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

# image

# She broke her best record twice (after games  and ) and her worst record four times (after games , , , and ), so we print 2 4 as our answer. Note that she did not break her record for best score during game , as her score during that game was not strictly greater than her best record at the time.

# Sample Input 1

# 10
# 3 4 21 36 10 28 35 5 24 42
# Sample Output 1

# 4 0
# Explanation 1

# The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

# image

# She broke her best record four times (after games , , , and ) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print 4 0 as our answer.

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'breakingRecords' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY scores as parameter.
#

def breakingRecords(scores):
    # Write your code here
    num_break_high = 0
    num_break_low = 0
    
    current_high_score = scores[0]
    current_low_score = scores[0]
    print("scores: ", scores)
    for score in scores[1:]:
        print("score: ", score)
        if score > current_high_score:
            current_high_score = score
            num_break_high = num_break_high + 1
        if score < current_low_score:
            current_low_score = score
            num_break_low = num_break_low + 1
        print("current_high_score: ", current_high_score)
        print("num_break_high: ", num_break_high)
        print("current_low_score: ", current_low_score)
        print("num_break_low: ", num_break_low)
    
    return [num_break_high, num_break_low]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
