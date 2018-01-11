# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# Example 1:
# nums1 = [1, 3]
# nums2 = [2]
# The median is 2.0

# Example 2:
# nums1 = [1, 2]
# nums2 = [3, 4]
# The median is (2 + 3)/2 = 2.5

def find_median_sorted_arrays(nums1, nums2)
  ## imagine that your data is merged [1,2,3,4,5,6,7,8,9]
  ## Thenm after the first 4 numbers, the next one is the median. 
  ##      Remaining    Remaining     Last used    Last used
  # i    a[i, ...]   b[4-i, ...]    from b       from a
  # 0    [2,3,6,8]           [9]    7            None
  # 1      [3,6,8]         [7,9]    5            2
  # 2        [6,8]       [5,7,9]    4            3
  # 3          [8]     [4,5,7,9]    1            6
  # 4           []   [1,4,5,7,9]    None         8

  
  a, b = [nums1, nums2].sort_by(&:size)
  m, n = a.size, b.size
  after = (m + n - 1) / 2
  i = (0...m).bsearch { |i| after-i-1 < 0 || a[i] >= b[after-i-1] } || m
  nextfew = (a[i,2] + b[after-i,2]).sort
  (nextfew[0] + nextfew[1 - (m+n)%2]) / 2.0
end

p find_median_sorted_arrays([1,3], [2]) == 2.0
p find_median_sorted_arrays([1,2], [3, 4])  == 2.5
p find_median_sorted_arrays([], [1])  == 1.0
p find_median_sorted_arrays([2,3,6,8], [1,4,5,7,9])
