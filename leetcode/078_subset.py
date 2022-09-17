# 78. Subsets

# Given an integer array nums of unique elements, return all possible subsets (the power set)

# Input 1: nums = [1, 2, 3]
# Output 1: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

# Output 2: nums = [0]
# Output 2: [[], [0]]

# Diagram
#       'abc' -> 'a', 'b', 'c', 'ab', 'bc', 'ac', 'abc', ''
#
# 1 Approach:
#                   ''
#             /             \
#           a       
#         /   \
#      'ab'  'a'
#      /  \     
#   'abc' 'ac'  
#
# 2 Approach: 
#       Each branch is an index
#                ''
#          /      |      \
#        'a'     'b'     'c'
#       /   \
#     'ab'  'ac'
#     /
#   'abc'

#

def subset(nums):
    def helper(prebuild, index):
        #base case
        result.append(prebuild)
        if index == len(nums):
            return

        #recursive cases
        for i in range(index, len(nums)):
            helper(prebuild + [nums[i]], i)

    result = []
    helper([], 0)
    return result

print(subset([1, 2, 3]))