# 077 Combination
#  Given 2 integers n and k, return all possible combinations of 
#  k numbers chosen from the range [1, n]

# Input: n= 4, k =2
# Output: [[1,2], [1,3], [1,4], [2,3], [2, 4], [3,4]]

# Input: n= 1, k =1
# Output: [[1]]

# Diagram 1
#                                 []
#                       /          \            \
#                     [1]            [2]          [3]
#                 /        \         /  \          /   
#              [1,2]       [1]    [2,3]  [2]   [3, 4]
#                       /      \         /   \
#                    [1,3]     [1]    [2,4]   [2]
#                              /   \              
#                           [1,4]  [1]           


# Diagram 2
#                                 []
#                 /             |          |          \
#              [1]             [2]          [3]        [4]
#           /   |    \         /   \        |           
#       [1,2]  [1,3] [1,4]   [2,3] [2,4]   [3,4]        
# 

def combination(n, k):
    def helper(prebuild, index):
        #base case
        if len(prebuild) == k:
            result.append(prebuild)
            return 
        for i in range(index, n):
            helper(prebuild + [i + 1], i +1)

    result = []
    helper([], 0)
    return result

print(combination(1, 1))
print('------------')
print(combination(4, 2))