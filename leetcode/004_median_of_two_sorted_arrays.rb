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

  ## imagine that your data is merged [1,2,3,4,5,6,7,8,9]
  ## Then after the first 4 numbers, the next one is the median. 
  ##      Remaining    Remaining     Last used    Last used
  # i    a[i, ...]   b[4-i, ...]    from b       from a
  # 0    [2,3,6,8]           [9]    7            None         // Violates Rule 1
  # 1      [3,6,8]         [7,9]    5            2            // Violates Rule 1
  # 2        [6,8]       [5,7,9]    4            3
  # 3          [8]     [4,5,7,9]    1            6
  # 4           []   [1,4,5,7,9]    None         8

  # To make the above possible, there are two rules:
  # 1. The last numbe rused from b can't be larger than the next remaining number in a (because it would've been a mistake ot use it first).
  # 2. The last number used from a can't be larger than the next remaining number in b.

  # After merging the first four numbers, we must be in some status.

  # m1 + m2 = k = (n1 + n2 + 1) / 2 # length of the array
  # Median must be from {A(m1-1), A(m1), B(m2-1), B(m2)}
  # Binary Search m1, base on a[m1] < ?b[m2-1]
  # C(k-1) = [A(m1-1), B(m2-1)].max
  # C(k)   = [A(m1), B(m2)].min

def find_median_sorted_arrays(nums1, nums2)
  # Sort the arrays by its size
  a, b = [nums1, nums2].sort_by(&:size)
  # figure out the length of each array input
  m, n = a.size, b.size
  # figure the median number of combination of two array
  k = (m + n - 1) / 2
  # Use binary search to find one that obeys rule 1
  # next remaing number in a is a[i]
  # last used number from b is b (k-i-1)
  i = (0...m).bsearch { |i| k-i-1 < 0 || a[i] >= b[k-i-1] } || m
  # take the next(up to) two number from each, and sort that
  nextfew = (a[i,2] + b[k-i,2]).sort
  # take the first number and test and whether the array is odd
  (nextfew[0] + nextfew[1 - (m+n)%2]) / 2.0

end

p find_median_sorted_arrays([1,3], [2]) == 2.0
p find_median_sorted_arrays([1,2], [3, 4])  == 2.5
p find_median_sorted_arrays([], [1])  == 1.0
p find_median_sorted_arrays([1,2,3], [4,5,6])  == 3.5 ## 3,4
p find_median_sorted_arrays([1,2], [3,4,5])  == 3.0 ## 3
p find_median_sorted_arrays([1,2], [3,4,5, 6])  == 3.5 ## 3,4
p find_median_sorted_arrays([1,2], [3,4,5,6,7])  == 4.0 ## 4
p find_median_sorted_arrays([2,4], [1,3,5])  == 3.0 ## 3
p find_median_sorted_arrays([9,10], [2,4,6])  == 6.0 ## 6
p find_median_sorted_arrays([2,3,6,8], [1,4,5,7,9]) == 5.0
