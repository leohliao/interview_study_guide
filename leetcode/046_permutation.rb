# Permutation
# Given a collection of distinct numbers, return all possible permutations.

# For example,
# [1,2,3] have the following permutations:
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]

# Recursive 
def permute(nums)
  # base case: return element in array form when it's done to 1 element
  # declare an empty array
  # take the first element out and declare it as one variable (modify the original)
  # take the rest of the element and make recursive calls 
  # iterate the recursive permutation
  # iterate each element in the permutation, 
  # slice the perm and shovel them into the array !IMPORTANT
  
  return [nums] if nums.length == 1
  total_perm = []
  first = nums.shift 
  perms = permute(nums)

  perms.each do |perm|
    (0..perm.length).each do |i|
      total_perm << perm[0...i] + [first] + perm[i..-1]
    end 
  end
  total_perm
end 

p permute([1,2,3]) #=> [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]