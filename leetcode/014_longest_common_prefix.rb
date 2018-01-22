# Write a function to find the longest common prefix string amongst an array of strings.

def longest_common_prefix(strs)
  ## return "" if there is nothing in the arr
  return "" if strs.length == 0 
  ## Select the first element in the strs and assign a variable to it
  prefix = strs[0]
  ## Iterate the rest of th array
  (1...strs.length).each do |i|
    ## check to see if that prefix (first element in the strs) exists in str[i] (other elements in the strs)
    ## if the above result = 0, it means that not only prefix exists in the elements, 
    ## but also means its in the pre-part of the elemnt
      while strs[i].index(prefix) !=0
      ## if prefix does not exist in the element, we gradually slice it down
          prefix = prefix.slice(0, prefix.length - 1)
          ## if we sliced prefix until the the prefix is nil, then return ""
          return "" if prefix.nil?
      end
    end
    ## return prefix
    return prefix
end

p longest_common_prefix(['leets', 'leetcode','leet','leeds']) == 'lee'
p longest_common_prefix(['abc', 'abcdef','abchkg','abcjpl']) == 'abc'


# Time complexity : O(n) , 
# where n is the sum of all characters in all strings.
# In the worst case all nn strings are the same. 
# The algorithm compares the string n1 with the other strings [n[2]..n[i]
# There are SS character comparisons, where SS is the sum of all characters in the input array.

# Space complexity : O(1). We only used constant extra space.