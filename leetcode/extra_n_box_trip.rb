# You have N boxes in your room which you want to carry to a different place. 
# There are too many to carry in one trip, 
# so you want to split them into several piles using the following algorithm: if the current pile has at most M boxes, 
# you can carry it as is, otherwise you split it into P parts as equally as possible 
# (i.e. so that the sizes of the parts differ at most by 1) and apply the same algorithm to each of the parts. 
# If you're trying to split less than P boxes into P piles, discard resulting zero-sized piles (see example 2).

# Calculate the number of piles you'll get in the end.

# The only line of input contains three space-separated integers: N, M and P. 1 <= N <= 100, 1 <= M <= 5, 2 <= P <= 5.

# NOTE: You must print your answer to standard out for our test runner to pick it up! 
# (eg console.log() or System.out.println() or print())

# Example 1
# input
# 11 2 2
# output
# 7

# The sequence of pile splits you do is:

# 11 -> 6 + 5
# 6 -> 3 + 3
# 5 -> 3 + 2
# 3 -> 2 + 1 (applied to three piles of 3 boxes each)

# You end up with 4 piles of 2 boxes and 3 piles of 1 boxes, a total of 7 piles.

# Example 2

# input

# 3 2 5

# output

# 3

# You have to split a pile of 3 boxes into 5 parts, so you get 3 piles of 1 box and 2 empty piles which you discard.
# a = gets.sub(/\n/,"").to_i
# b = gets.sub(/\n/,"").to_i
# c = gets.sub(/\n/,"").to_i